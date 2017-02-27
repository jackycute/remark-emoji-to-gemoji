'use strict';

var visit = require('unist-util-visit');
var escape = require('escape-string-regexp');
var gemoji = require('gemoji');

module.exports = emojiToGemoji;

var regex = create();

function emojiToGemoji() {
  return transformer;
}

function transformer(tree) {
  visit(tree, 'text', visitor);
}

function visitor(node) {
  node.value = node.value.replace(regex, replace);
}

function replace(matched) {
  return ':' + gemoji.unicode[matched].name + ':';
}

function create() {
  var unicode = gemoji.unicode;
  var sources = [];
  var key;

  for (key in unicode) {
    sources.push(escape(key));
  }

  sources.sort(sort);

  return new RegExp(sources.join('|'), 'g');

  function sort(a, b) {
    return b.length - a.length;
  }
}
