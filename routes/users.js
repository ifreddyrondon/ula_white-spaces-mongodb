var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.create = function(req, res){

	var user = User();
	user.email = req.body.email;
	user.password = req.body.password;

	user.save(function(err, user){
		if (err)
			res.send(err);

		res.json({ message : 'User created!' });
	});

};
