const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./Schemas');
const resolvers = require('./Resolvers');

require('dotenv').config();

const { models, mongooseConnect } = require('./models');

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: {
		models
	}
});

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 8000;

mongooseConnect.then(() => {
	app.listen({ port }, () => {
		console.log(`Apollo Server running on port ${port}/graphql`);
	});
});
