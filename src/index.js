const miniget = require('miniget')

module.exports = async (query, options = {}) => {
    const response = await miniget(
        'https://www.youtube.com/results?search_query=' + encodeURIComponent(query), {...options, ...{filter: undefined}}
    ).text()
    const match = response.match(/(window\["ytInitialData"]|var ytInitialData)\s*=\s*(.*)};/)
    const line = match[0].trim()
    const json = JSON.parse(line.substring(line.indexOf('{'), line.length - 1))
    const result = json
        ['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer']
        ['contents'][0]['itemSectionRenderer']['contents']
    return result.filter(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        if (options.filter === 'video') return type === 'video'
        else if (options.filter === 'playlist') return type === 'playlist'
        else return ['video', 'playlist'].includes(type)
    }).map(video => {
        const type = Object.keys(video)[0].replace('Renderer', '')
        const data = video[type + 'Renderer']
        const identifier = data[type + 'Id']
        if (type === 'video') {
            const isStream = !Object.keys(data).includes('lengthText')
            let length = Number.MAX_VALUE
            if (!isStream) {
                length = 0
                data['lengthText']['simpleText'].split(':').reverse().forEach((value, index) => {
                    const i = Number(value)
                    length += (index === 0 ? i : i * (60 ** index))
                })
            }
            return {
                type: type,
                identifier: identifier,
                uri: 'https://www.youtube.com/watch?v=' + identifier,
                title: data['title']['runs'][0]['text'],
                author: {
                    name: data['ownerText']['runs'][0]['text'],
                    profile: data['channelThumbnailSupportedRenderers']['channelThumbnailWithLinkRenderer']
                        ['thumbnail']['thumbnails'][0]['url'],
                    uri: 'https://www.youtube.com' + data['ownerText']['runs'][0]['navigationEndpoint']
                        ['commandMetadata']['webCommandMetadata']['url']
                },
                length: {
                    ms: isStream ? length : length * 1000,
                    sec: length
                },
                isStream: isStream,
                thumbnails: data['thumbnail']['thumbnails']
            }
        } else return {
            type: type,
            identifier: identifier,
            uri: 'https://www.youtube.com/playlist?list=' + identifier,
            title: data['title']['simpleText'],
            author: {
                name: data['longBylineText']['runs'][0]['text'],
                uri: 'https://www.youtube.com' + data['longBylineText']['runs'][0]['navigationEndpoint']
                    ['commandMetadata']['webCommandMetadata']['url']
            },
            count: Number(data['videoCount']),
            thumbnails: data['thumbnails']
        }
    })
}
