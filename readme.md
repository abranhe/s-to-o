<p id="top">
	<a href="https://www.npmjs.com/package/s-to-o">
		<img src="https://cdn.abranhe.com/projects/s-to-o/logo.svg" width="30%" height="30%">
		</a>
	<br>
</p>

# s-to-o

> Convert an string into an object

[![](https://img.shields.io/travis/abranhe/s-to-o.svg?logo=travis)](https://travis-ci.org/abranhe/s-to-o)
[![](https://abranhe.com/badge.svg)](https://github.com/abranhe)
[![](https://cdn.abranhe.com/badges/cash-me.svg)](https://cash.me/$abranhe)
[![](https://cdn.abranhe.com/badges/patreon.svg)](https://patreon.com/abranhe)
[![](https://img.shields.io/github/license/abranhe/s-to-o.svg)](https://github.com/abranhe/s-to-o/blob/master/license)
[![](https://img.shields.io/npm/v/s-to-o.svg)](https://npmjs.com/package/s-to-o)

## Install

```
npm install s-to-o
```

## Usage

```js
const sto = require('s-to-o');

console.log(sto('a: 1, b: 2, c: 3, d: 4'));
// => { a: '1', b: '2', c: '3', d: '4' }
```

## API

### sto(input)

Type: `function`

Return Type: `object`

A replacement for JSON.parse() which converts an string into an object.

#### input

Type: `string`

String to be parsed.


## Related

- [str-to-arr](https://github.com/abranhe/str-to-arr): Add words from a string to an array

## License

MIT © [Abraham Hernandez](https://abranhe.com)
