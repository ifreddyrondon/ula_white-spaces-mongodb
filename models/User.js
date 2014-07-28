// models/User.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

	email : { 
		type: String,
		required: true, 
		index: { 
			unique: true 
		},
		validate : [
			function(){
				var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   				return emailRegex.test(this.email);
			},

			'Bad email address'
		]
	},

	password : {
		type : String,
		required: true, 
	}

});

module.exports = mongoose.model('User', UserSchema);