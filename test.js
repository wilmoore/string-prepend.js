"use strict";

/*!
 * imports.
 */

var test = require("tape");

/*!
 * imports (local).
 */

var prepend = require("./");

/*!
 * tests.
 */

test("full application", function (t) {
  t.plan(1);
  t.equal(prepend("http://", "example.com"), "http://example.com");
});

test("higher order", function (t) {
  t.plan(1);
  var fn = prepend("http://");
  t.assert(typeof fn === "function", "function returned");
});

test("function returned", function (t) {
  t.plan(1);
  var fn = prepend("http://");
  t.assert(fn.length === 1, "with arity of 1");
});

test("map", function (t) {
  t.plan(1);

  var paramName = prepend("http://");
  var interests = ["example.com", "google.com", "yahoo.com"];

  t.deepEqual(interests.map(paramName), ["http://example.com", "http://google.com", "http://yahoo.com"]);
});
