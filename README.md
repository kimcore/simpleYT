# simpleYT

[![install size](https://packagephobia.com/badge?p=simpleyt%40latest)](https://packagephobia.com/result?p=simpleyt%40latest)
[![image](https://img.shields.io/github/license/kimcore/simpleYT)](https://github.com/kimcore/simpleYT/blob/master/LICENSE)

[![image](https://nodei.co/npm/simpleyt.png?downloads=true&stars=true)](https://nodei.co/npm/simpleyt/)

> Simple youtube search library without need of an api key

## Usage
If you intend to use this library on a browser, use jsDelivr:
```html
<script src="https://cdn.jsdelivr.net/gh/kimcore/simpleyt@latest/browser/simpleyt.min.js"></script>
```
and then you can use `require('simpleyt')` like the example below:
```js
const simpleYT = require('simpleyt')
const query = 'very long playlist'
simpleYT(query, {
    filter: 'video', 
    // Available filters: video, playlist

    localAddress: '2001:470:1234:5678::a',
    family: 6
    // Other parameters are passed to miniget (https)
}).then(console.log)
```
## Result
```js
[
  {
      type: 'video',
      identifier: 'nPuHl_Hl2xI',
      uri: 'https://www.youtube.com/watch?v=nPuHl_Hl2xI',
      title: '12 HOURS LONG RELAX MUSIC - Relaxation, Meditation, Sleep and Spa Music by RELAX CHANNEL ☯188',
      author: {
        name: 'RELAX CHANNEL',
        profile: 'https://yt3.ggpht.com/a-/AOh14GiqEKfh0k2lWpQVJU18CYULkb9XL2g8i7Jd2A=s68-c-k-c0x00ffffff-no-rj-mo',
        uri: 'https://www.youtube.com/user/relaxvideoschannel'
      },
      length: { ms: 42888000, sec: 42888 },
      isStream: false,
      thumbnails: [ [Object], [Object], [Object], [Object] ]
    },
    ...
    {
      type: 'playlist',
      identifier: 'PLAhZL8hvPmBGp4RpHNHThexBegcjYxcC-',
      uri: 'https://www.youtube.com/playlist?list=PLAhZL8hvPmBGp4RpHNHThexBegcjYxcC-',
      title: 'The very long music playlist',
      author: {
        name: 'Humphreys Samuel',
        uri: 'https://www.youtube.com/channel/UC0fAfWQXyTVN-R7NP0BWwGA'
      },
      count: 1000,
      thumbnails: [ [Object], [Object], [Object], [Object], [Object] ]
    },
    ...
]
```
## Try our API
You can try this library on our API (thanks to shilu)
`https://ytapi.cf/search/{Query}`


