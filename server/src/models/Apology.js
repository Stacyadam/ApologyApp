const mongoose = require('mongoose');

const apologySchema = new mongoose.Schema({
	text: {
		type: String,
		required: 'Please enter an apology'
	}
});

module.exports = mongoose.model('Apology', apologySchema);
