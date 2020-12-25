'use strict';

class CosSts {
  constructor(options) {
    this.STS = options.STS;
    this.options = { ...options, STS: undefined };
    this.cache = { credential: undefined };
  }

  get getPolicy() {
    return this.STS.getPolicy;
  }

  getCredential(params) {
    return new Promise((resolve, reject) => {
      if (this.cache?.credential?.expiredTime * 1000 > Date.now()) {
        return resolve(this.cache.credential);
      }
      const options = { ...this.options, ...params };
      this.STS.getCredential(options, (err, res) => {
        if (err) return reject(err);
        this.cache.credential = res;
        return resolve(res);
      });
    });
  }
}

module.exports = CosSts;
