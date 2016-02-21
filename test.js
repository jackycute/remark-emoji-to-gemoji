/**
 * @author jackycute
 * @copyright 2016 jackycute
 * @license MIT
 * @module remark:gemoji
 * @fileoverview
 *   Plug-in to transform emoji unicodes into gemoji shortcodes
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var test = require('tape');
var remark = require('remark');
var emojiToGemoji = require('./index.js');

var gemoji = require('gemoji');

var processor = remark().use(emojiToGemoji);

var emojiList = [];
var renderedEmojiList = [];
Object.keys(gemoji.name).forEach(function (key) {
    if (emojiList.length > 0) {
        // do not test alias emojis
        if (emojiList[emojiList.length - 1] != gemoji.name[key].emoji) {
            emojiList.push(gemoji.name[key].emoji);
            renderedEmojiList.push(':' + key.replace(/\_/g, '\\_') + ':');
        }
    } else {
        emojiList.push(gemoji.name[key].emoji);
        renderedEmojiList.push(':' + key.replace(/\_/g, '\\_') + ':');
    }    
});

/*
 * Tests.
 */

test('remark-emoji-to-gemoji', function (t) {
    processor.process([
        emojiList,
        ''
    ].join('\n'), function (err, file, doc) {
        t.ifErr(err);

        t.equal(doc, [
            renderedEmojiList,
            ''
        ].join('\n'));
    });

    t.end();
});
