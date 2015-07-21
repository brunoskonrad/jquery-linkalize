# jQuery Linkalize

[![Build Status](https://travis-ci.org/brunoskonrad/jquery-linkalize.svg?branch=master)](https://travis-ci.org/brunoskonrad/jquery-linkalize)
[![Bower version](https://badge.fury.io/bo/jquery-linkalize.svg)](http://badge.fury.io/bo/jquery-linkalize)

Ok. Let's suppose that you create a dynamic UI. And the content has a URL in text format. How do you make it clickable? Run `$('foo').linkalize()` and that's it!

## Options

You pass as a object on plugin calls. e.g.:
```javascript
$('foo').linkalize({
  class: 'foo bar',
  open: 'self',
  data: {foo: 'bar'}
});
```

And here's an option table with their description

| Options | Description |
|-------- | ----------- |
| class   | Pass the classes that will be wrapped in the `<a>` tag |
| open    | If `blank` then the link open in a new page. `self` is the default and open in the same |
| data    | An object to represent data-attributes. E.g: `data: {foo: 'bar', fooBar: 'baz'}` will return `<a data-foo="bar" data-foo-bar="baz">...</a>`|

## Contribute

It's simple at this point. If you use it and need some feature OR create an issue or send a Pull Request and let's talk about that!

To contribute fork this project and run the `npm install`.
To run the specs use the `npm run test`.
