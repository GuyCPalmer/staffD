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
};
=======

}
>>>>>>> 4e14ed2f9ce15b97dac6abb3afc18411cdb0aef8
