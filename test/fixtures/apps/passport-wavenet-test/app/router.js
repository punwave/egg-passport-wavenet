'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = 'hi, ' + app.plugins.passportWavenet.name;
  });

  app.passport.mount('wavenet');
};
