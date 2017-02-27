'use strict';

var test = require('tape');
var remark = require('remark');
var gemoji = require('gemoji');
var emojiToGemoji = require('./');

var processor = remark().use(emojiToGemoji);

var emojiList = [];
var renderedEmojiList = [];

Object.keys(gemoji.name).forEach(function (key) {
  if (emojiList.length > 0) {
    // do not test alias emojis
    if (emojiList[emojiList.length - 1] !== gemoji.name[key].emoji) {
      emojiList.push(gemoji.name[key].emoji);
      renderedEmojiList.push(':' + key + ':');
    }
  } else {
    emojiList.push(gemoji.name[key].emoji);
    renderedEmojiList.push(':' + key + ':');
  }
});

test('remark-emoji-to-gemoji', function (t) {
  t.plan(2);

  processor.process(emojiList.join('\n') + '\n', function (err, file) {
    t.ifErr(err);
    t.equal(String(file), renderedEmojiList.join('\n') + '\n');
  });
});
