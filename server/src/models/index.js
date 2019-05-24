const mongoose = require('mongoose');

const mongooseConnect = mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

module.exports = {
	mongooseConnect
};
