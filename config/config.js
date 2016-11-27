var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyecto-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyecto-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'proyecto'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/proyecto-production'
  }
};

module.exports = config[env];
