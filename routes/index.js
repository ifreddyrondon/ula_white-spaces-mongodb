var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User = mongoose.model('User');
var Place = mongoose.model('Place');
var Coordinate = mongoose.model('Coordinate');

router.route('/users')
	.post(function(req, res){

		var user = User();
		user.email = req.body.email;
		user.password = req.body.password;

		user.save(function(err, user){
			if (err)
				res.send(err);

			res.json({ message : 'User created!' });
		});

	});

router.route('/places')
	.post(function(req, res){

		Place.findOrCreate({
			name: req.body.name,
			userId: req.body.userId
		}, 
		function(err, place, created) {
			if (err)
				res.send(err);

			console.log(created);
			console.log(place);

			res.json({ message : 'Nice place!' });
	  	});	

	});

router.route('/coordinates')
	.post(function(req, res){

		Coordinate.findOrCreate({
			latitude: req.body.latitude,
			longitude: req.body.longitude,
			placeId: req.body.placeId
		}, 
		function(err, coordinate, created) {
			if (err)
				res.send(err);

			console.log(created);
			console.log(coordinate);

			res.json({ message : 'Nice coordinate!' });
	  	});	

	});



router.get('/', function(req, res) {
 	res.send({
  		message: 'Wellcome',
	});
});

module.exports = router;
