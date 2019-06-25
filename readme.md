# jarse

[![CircleCI](https://circleci.com/gh/george-aidonidis/jarse/tree/master.svg?style=svg)](https://circleci.com/gh/george-aidonidis/jarse/tree/master) [![codecov](https://codecov.io/gh/george-aidonidis/jarse/badge.svg?branch=master)](https://codecov.io/gh/george-aidonidis/jarse?branch=master) [![NPM version](https://img.shields.io/npm/v/jarse.svg?style=flat)](https://www.npmjs.com/package/jarse)

> Parse json without the errors

## Install

```
$ yarn add jarse
```

## Usage

```js
const jParse = require('jarse');
const json = `
	{"data": ["value", {"key": "name", "value": "John Doe"}]}
`;

jParse(json);
//=> { data: [ 'value', { key: 'name', value: 'John Doe' } ] }
```

## Contributing

1. Fork it (<https://github.com/George-Aidonidis/jarse/fork>)
2. Create your feature branch (git checkout -b feature/fooBar)
3. Commit your changes (git commit -am 'Add some fooBar')
4. Push to the branch (git push origin feature/fooBar)
5. Create a new Pull Request

## License

[MIT](./license) © [George Aidonidis](https://georgeaidonidis.com)
