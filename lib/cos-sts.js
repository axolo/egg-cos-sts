'use strict';

const COSSTS = require('qcloud-cos-sts');

class CosSts {
  constructor(options) {
    this.STS = options.STS || COSSTS;
    delete options.STS;
    this.options = options;
    this.cache = { credential: undefined };
  }

  get getPolicy() {
    return this.STS.getPolicy;
  }

  getCredential(params) {
    return new Promise((resolve, reject) => {
      if (this.cache.credential) {
        const { startTime, expiredTime, cacheTime } = this.cache.credential;
        const ttl = (expiredTime - startTime);
        if (cacheTime + ttl > Date.now() / 1000) {
          return resolve(this.cache.credential);
        }
      }
      const options = { ...this.options, ...params };
      this.STS.getCredential(options, (err, res) => {
        if (err) return reject(err);
        this.cache.credential = res;
        this.cache.credential.cacheTime = Math.floor(Date.now() / 1000);
        return resolve(res);
      });
    });
  }
}

module.exports = CosSts;
