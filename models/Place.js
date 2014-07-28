// models/Place.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate');

var PlaceSchema = new Schema({

	name: { 
    	type: String, 
    	required: true, 
    	index: true,
    },

    userId: {
    	type: Schema.ObjectId,
    	required: true, 
    	index: true,
    },

    numberCoordinates: {
      type: Number,
      default : 0,
    },

    potencyMin : Number,

    potencyMax : Number,

    potencyAvg : Number,

    sdPotencyAvg : Number,

    avgPotencySD : Number

});

PlaceSchema.plugin(findOrCreate);
module.exports = mongoose.model('Place', PlaceSchema);