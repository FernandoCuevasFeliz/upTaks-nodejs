const { Router } = require('express');

const router = Router();

router.get('/my-projects', (req, res) => {
  res.render('pages/my-projects', {
    namePage: 'Home',
  });
});

module.exports = router;
