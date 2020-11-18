const authCtrl = {};

authCtrl.login = (req, res) => {
  console.log(req.body);
  res.redirect('/profile');
};

authCtrl.register = (req, res) => {
  console.log(req.body);
  res.redirect('/profile');
};

module.exports = authCtrl;
