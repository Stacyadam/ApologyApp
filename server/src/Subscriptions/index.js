const { PubSub } = require('apollo-server');

const APOLOGY_EVENTS = require('./Apology');

exports.EVENTS = { APOLOGY: APOLOGY_EVENTS };

module.exports = new PubSub();
