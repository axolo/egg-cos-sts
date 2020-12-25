'use strict';

const STS = require('qcloud-cos-sts');

// @see https://github.com/tencentyun/qcloud-cos-sts-sdk
exports.cosSts = {
  default: {
    STS,
  },
  // client: {
  //   secretId: 'COS_SECRETID',
  //   secretKey: 'COS_SECRETKEY',
  //   bucket: 'BUCKET-APPID',
  //   region: 'REGION',
  //   proxy: '',
  //   durationSeconds: 1800,
  //   allowPrefix: 'PREFIX',
  //   policy: {
  //     version: '2.0',
  //     statement: [{
  //       action: [
  //         'name/cos:PutObject',
  //         'name/cos:PostObject',
  //       ],
  //       effect: 'allow',
  //       principal: { qcs: [ '*' ] },
  //       resource: [
  //         'qcs::cos:REGION:uid/APPID:prefix//APPID/BUCKET/PREFIX',
  //       ],
  //     }],
  //   },
  // },
};
