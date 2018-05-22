var exports = module.exports = {};


exports.signup = function(req,res){

	res.render('signup'); 
};

exports.signin = function(req,res){

	res.render('signin'); 
};

exports.dashboard = function(req,res){

	res.render('dashboard'); 
};

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });
<<<<<<< HEAD
=======

>>>>>>> 1a593a8cc58a9918db13c6322f83be692bd5d602
};
