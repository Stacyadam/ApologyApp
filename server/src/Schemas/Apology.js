const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		apology(id: ID!): Apology!
		apologies(from: Int, to: Int): [Apology!]
	}

	extend type Mutation {
		createApology(text: String!): Apology!
		deleteApology(id: ID!): Boolean!
		likeApology(id: ID!): Apology!
	}

	type Apology {
		id: ID!
		text: String!
		dateTime: String!
		likes: Int
	}
`;
