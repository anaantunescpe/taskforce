var express = require('express');
const firebase = require('firebase');
const Blog = require('../models/blog');
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

router.get('/login', (req, res, next) => {
  res.render('login', {title: 'Acesso Restrito'})
});

router.post('/login', (req, res, next) => {
  const user = req.body.user
  console.log(user);
  firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((fIREBASE) => {
    console.log("_________________________________________________________________________________________________");
    console.log(fIREBASE);
    console.log("_________________________________________________________________________________________________");
    console.log(fIREBASE.user.uid);
    console.log("_________________________________________________________________________________________________");
    res.redirect('/')
  }).catch((error) => {
    console.log(error);
    res.redirect('/error');
  });
});

module.exports = router;
