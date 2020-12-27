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

## API

### getCredential([ options ])

|  参数   |  类型   |      说明       |
| ------- | ------- | --------------- |
| options | Object  | 合并到插件配置  |
| 返回    | Promise | 返回STS临时令牌 |

### getPolicy(scope)

| 参数  |  类型  |       说明        |
| ----- | ------ | ----------------- |
| scope | Array  | 权限策略列表      |
| 返回  | Object | 符合STS规则的策略 |
## 提问交流

请到 [egg issues](https://github.com/axolo/egg-cos-sts/issues) 异步交流。

## License

[MIT](LICENSE)

## TODO

- 缓存与适配器

[SDK]: https://github.com/tencentyun/qcloud-cos-sts-sdk
