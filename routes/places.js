var mongoose = require('mongoose');
var Place = mongoose.model('Place');

exports.create = function(req, res){

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

};
