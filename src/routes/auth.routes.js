const { Router } = require('express');

const router = Router();

router
  .route('/login')
  .get((req, res) => {
    res.render('login', {
      namePage: 'Login',
    });
  })
  .post((req, res) => {
    console.log(req.body);
    res.redirect('/profile');
  });

router
  .route('/register')
  .get((req, res) => {
    res.render('register', {
      namePage: 'Register',
    });
  })
  .post((req, res) => {
    console.log(req.body);
    res.redirect('/profile');
  });

module.exports = router;
