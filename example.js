// Dependencies:
var remark = require('remark');
var emojiToGemoji = require('./index.js');

// Process:
var doc = remark().use(emojiToGemoji).processSync('😄 👍').toString();

// Yields:
console.log('md', doc);
