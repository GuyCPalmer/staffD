<<<<<<< HEAD
var exports = module.exports = {};
=======
var exports = module.exports = {}
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}