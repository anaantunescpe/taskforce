var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

router.get('/error', (req, res, next) => {
  res.render('error', {title: 'Erro!'})
});

router.get('/about', (req, res, next) => {
  res.render('about', {title: 'Quem Somos!'})
});

module.exports = router;
