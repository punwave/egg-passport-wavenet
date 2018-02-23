# egg-passport-wavenet

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]

> Wavenet passport plugin for egg

## Install

```bash
$ npm i egg-passport-wavenet --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.passportWavenet = {
  enable: true,
  package: 'egg-passport-wavenet',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.passportWavenet = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/punwave/egg-passport-wavenet/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-passport-wavenet.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-wavenet
[travis-image]: https://img.shields.io/travis/punwave/egg-passport-wavenet.svg?style=flat-square
[travis-url]: https://travis-ci.org/punwave/egg-passport-wavenet
[codecov-image]: https://img.shields.io/codecov/c/github/punwave/egg-passport-wavenet.svg?style=flat-square
[codecov-url]: https://codecov.io/github/punwave/egg-passport-wavenet?branch=master
[david-image]: https://img.shields.io/david/punwave/egg-passport-wavenet.svg?style=flat-square
