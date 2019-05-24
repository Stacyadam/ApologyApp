const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
const mongoose = require('mongoose');

const schema = require('./Schemas');
const resolvers = require('./Resolvers');

require('dotenv').config();

const { mongooseConnect } = require('./models');

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: {}
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;

mongooseConnect.then(() => {
	httpServer.listen({ port }, () => {
		console.log(`Apollo Server running on port ${port}/graphql`);
	});
});
