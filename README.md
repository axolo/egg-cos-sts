# egg-cos-sts

Tencent cloud COS STS [SDK] plugin for Egg.js.

## Install

```bash
npm i @axolo/egg-cos-sts --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.cosSts = {
  enable: true,
  package: '@axolo/egg-cos-sts',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.cosSts = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-cos-sts/issues).

## License

[MIT](LICENSE)

[SDK]: https://github.com/tencentyun/qcloud-cos-sts-sdk
