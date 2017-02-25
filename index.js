/**
 * @author jackycute
 * @copyright 2016 jackycute
 * @license MIT
 * @module remark:gemoji
 * @fileoverview
 *   Plug-in to transform emoji unicodes into gemoji shortcodes
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var visit = require('unist-util-visit');
var escape = require('escape-string-regexp');
var gemoji = require('gemoji');

var regex = create();

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

/**
 * Transformer.
 *
 * @param {Node} tree - remark node to visit.
 */
function transformer(tree) {
    visit(tree, 'text', function (node) {
        node.value = node.value.replace (regex, function (matched) {
            return ':' + gemoji.unicode[matched].name + ':';
        });
    });
}

/**
 * Attacher.
 *
 * @return {function(node)} - Transformer.
 */
function attacher() {
    return transformer;
}

/*
 * Expose.
 */

module.exports = attacher;
