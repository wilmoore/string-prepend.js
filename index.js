"use strict";

/**
 * exports.
 */

module.exports = prepend;

/**
 * Curried `String.prototype.prepend`.
 *
 * @param {String} pre
 * String to prepend to original string.
 *
 * @param {String} string
 * Original string.
 *
 * @return {String}
 * String consisting of prepended and original string.
 */

function prepend(pre) {
  function prepender(string) { return pre + string; }

  return arguments.length > 1
  ? prepender(arguments[1])
  : prepender;
}
