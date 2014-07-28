var mongoose = require('mongoose');
var Coordinate = mongoose.model('Coordinate');

exports.create = function(req, res){

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

};
