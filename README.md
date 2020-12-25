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

## API

### getCredential([ options ])

| params  |  type   |          desc           |
| ------- | ------- | ----------------------- |
| options | Object  | merge to plugin options |
| return  | Promise | STS Credential          |

### getPolicy(scope)

| params |  type  |            desc             |
| ------ | ------ | --------------------------- |
| scope  | Array  | statement array of COS STS  |
| return | Object | COS STS policy like options |

## Questions & Suggestions

Please open an issue [here](https://github.com/axolo/egg-cos-sts/issues).

## License

[MIT](LICENSE)

[SDK]: https://github.com/tencentyun/qcloud-cos-sts-sdk
