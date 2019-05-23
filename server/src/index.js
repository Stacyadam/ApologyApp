const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const schema = require('./Schemas');
const resolvers = require('./Resolvers');

const app = express();

app.use(cors());

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	context: {
	}
});

server.applyMiddleware({ app, path: '/graphql' });

const port = process.env.PORT || 8000;

app.listen({ port }, () => {
	console.log(`Apollo Server running on port ${port}/graphql`);
});
