# egg-cos-sts

腾讯云对象存储（COS）STS [SDK] Egg.js 插件。

## 安装插件

```bash
npm i @axolo/egg-cos-sts --save
```

## 开启插件

```js
// config/plugin.js
exports.cosSts = {
  enable: true,
  package: '@axolo/egg-cos-sts',
};
```

## 详细配置

```js
// {app_root}/config/config.default.js
exports.cosSts = {
};
```

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 提问交流

请到 [egg issues](https://github.com/axolo/egg-cos-sts/issues) 异步交流。

## License

[MIT](LICENSE)

[SDK]: https://github.com/tencentyun/qcloud-cos-sts-sdk
