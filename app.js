'use strict';

const CosSts = require('./lib/cos-sts');

const createCosSts = options => new CosSts(options);

module.exports = app => {
  app.addSingleton('cosSts', createCosSts);
};
