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
<<<<<<< HEAD
};
=======
};
>>>>>>> ec2fa47cfba6ea1b483fcd9414ca8d8abdf7099a
>>>>>>> 8e94677232ffc13309626feaee76ec416b55a321
