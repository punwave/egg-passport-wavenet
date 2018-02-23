# egg-passport-wavenet

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-wavenet.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-wavenet
[travis-image]: https://img.shields.io/travis/punwave/egg-passport-wavenet.svg?style=flat-square
[travis-url]: https://travis-ci.org/punwave/egg-passport-wavenet
[codecov-image]: https://img.shields.io/codecov/c/github/punwave/egg-passport-wavenet.svg?style=flat-square
[codecov-url]: https://codecov.io/github/punwave/egg-passport-wavenet?branch=master
[david-image]: https://img.shields.io/david/punwave/egg-passport-wavenet.svg?style=flat-square
[david-url]: https://david-dm.org/punwave/egg-passport-wavenet
[snyk-image]: https://snyk.io/test/npm/egg-passport-wavenet/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-wavenet
[download-image]: https://img.shields.io/npm/dm/egg-passport-wavenet.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-wavenet

wavenet passport plugin for egg

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
