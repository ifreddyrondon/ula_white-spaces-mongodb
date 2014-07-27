var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.route('/users')
	.post(function(req, res){

		var user = User();
		user.email = req.body.name;

		user.save(function(err){
			if (err)
				res.send(err);

			res.json({ message : 'User created!' });
		});

	});


// router.get('/', function(req, res) {
//   res.send({
//   	name: 'Merida City',
//   	numberCoordinates: 350,

//   });
// });

module.exports = router;
