# remark-emoji-to-gemoji [![Build Status][travis-badge]][travis]

[**remark**][remark] plug-in to transform emoji unicodes into gemoji shortcodes

## Installation

[npm][npm-install]:

```bash
npm install remark-emoji-to-gemoji
```

## Usage

Dependencies:

```javascript
var remark = require('remark');
var emojiToGemoji = require('remark-emoji-to-gemoji');
```

Process:

```javascript
var doc = remark().use(emojiToGemoji).processSync('😄 👍').toString();
```

Yields:

```md
:smile: :+1:
```

## API

### `remark().use(emojiToGemoji)`

Transform emoji unicodes into gemoji shortcodes (like 😄 into `:smile:`).

## License

[MIT][license] © [Max Wu][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/jackycute/remark-emoji-to-gemoji.svg

[travis]: https://travis-ci.org/jackycute/remark-emoji-to-gemoji

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: https://github.com/jackycute

[remark]: https://github.com/wooorm/remark
