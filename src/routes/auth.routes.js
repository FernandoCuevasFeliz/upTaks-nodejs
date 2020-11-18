const { Router } = require('express');

const authCtrl = require('../controllers/auth.controllers');

const router = Router();

router
  .route('/login')
  .get((req, res) => {
    res.render('pages/auth/login', {
      namePage: 'Login',
    });
  })
  .post(authCtrl.login);

router
  .route('/register')
  .get((req, res) => {
    res.render('pages/auth/register', {
      namePage: 'Register',
    });
  })
  .post(authCtrl.register);

module.exports = router;
