# simpleyt

[![image](https://img.shields.io/github/license/kimcore/simpleYT?style=flat-square)](https://github.com/kimcore/simpleYT/blob/master/LICENSE)

[![image](https://nodei.co/npm/simpleyt.png?downloads=true&stars=true)](https://nodei.co/npm/simpleyt/)

> Simple youtube search library without need of an api key

## Usage
```js
const simpleYT = require('simpleyt')
const query = 'JUSTHIS'
simpleYT(query, {
    filter: 'video', // Filter only videos
    localAddress: '2001:470:1234:5678::a'
    // Other parameters are passed to node-fetch
}).then(console.log)
```
## Result
```js
[
  {
    type: 'video',
    identifier: 'iMTblJbmam4',
    uri: 'https://www.youtube.com/watch?v=iMTblJbmam4',
    title: "[ENG/CC][4K] JUSTHIS(저스디스)의 킬링벌스를 라이브로! I IndiGO, Diablo, Gone, DF KV Freestyle, That Ain't Real 등",
    author: {
      name: 'dingo freestyle',
      profile: 'https://yt3.ggpht.com/a-/AOh14GiiLlR1duwARrL4IWqmVVZcuH-mdVnQLunfTw=s68-c-k-c0x00ffffff-no-rj-mo',
      uri: 'https://www.youtube.com/user/nunnaamo'
    },
    length: { ms: 794000, sec: 794 },
    isStream: false,
    thumbnails: [ [Object], [Object], [Object], [Object] ]
  },
  ...
]
```


