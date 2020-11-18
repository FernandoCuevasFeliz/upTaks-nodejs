const { Router } = require('express');

// importing routes
const authRoutes = require('./auth.routes');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    namePage: 'Home',
  });
});

router.get('/profile', (req, res) => {
  res.send('<h1>Welcome profile</h1>');
});

router.use('/', authRoutes);

module.exports = router;
