# string-prepend

[![Code Climate](https://codeclimate.com/github/wilmoore/string-prepend.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/string-prepend.js) [![Build Status](http://img.shields.io/travis/wilmoore/string-prepend.js.svg)](https://travis-ci.org/wilmoore/string-prepend.js) [![NPM version](http://img.shields.io/npm/v/string-prepend.svg)](https://www.npmjs.org/package/string-prepend) [![NPM downloads](http://img.shields.io/npm/dm/string-prepend.svg)](https://www.npmjs.org/package/string-prepend) [![LICENSE](http://img.shields.io/npm/l/string-prepend.svg)](license)

> The unicorn String.prototype.prepend as a curried function.

    $ npm install string-prepend --save

## API Examples & Inspiration

###### Require

    var prepend = require('./');

###### Equivalent to str1 + str2

    prepend("http://", "example.com");
    //=> http://example.com

###### URL building

    var paramName = prepend('http://');
    var interests = ["example.com", "google.com", "yahoo.com"];

    interests.map(paramName);
    //=> [ 'http://example.com', 'http://google.com', 'http://yahoo.com' ]

###### Query params building

    var paramName = prepend('interest[]=');
    var interests = ["finance", "fitness", "health"];

    var params = interests.map(paramName);
    //=> [ 'interest[]=finance', 'interest[]=fitness', 'interest[]=health']

    params.join('&');
    //=> interest[]=finance&interest[]=fitness&interest[]=health

## License

  [MIT](license)

