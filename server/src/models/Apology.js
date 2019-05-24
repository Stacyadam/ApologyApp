const mongoose = require('mongoose');

const apologySchema = new mongoose.Schema({
	text: {
		type: String,
		required: 'Please enter an apology'
	},
	dateTime: {
		type: Date
	},
	likes: {
		type: Number
	}
});

module.exports = mongoose.model('Apology', apologySchema);
