// Dependencies:
var remark = require('remark');
var emojiToGemoji = require('./index.js');

// Process:
var doc = remark().use(emojiToGemoji).process([
    '😄 👍'
].join('\n'));

// Yields:
console.log('md', doc);
