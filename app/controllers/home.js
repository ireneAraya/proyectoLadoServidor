var express = require('express'),
    app = express(),
    router = express.Router(),
    mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost', 'bankApp'),
    Listas = mongoose.model('lists')

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Listas.find(function (err, lists) {
    if (err) return next(err);
    res.render('index', {
      title: 'BARECO',
      lists: lists
    });
  });
});