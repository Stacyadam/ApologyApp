const mongoose = require('mongoose');

const mongooseConnect = mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

const models = {
	Apology: require('./Apology')
};

module.exports = {
	models,
	mongooseConnect
};
