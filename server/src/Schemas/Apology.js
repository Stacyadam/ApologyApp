const { gql } = require('apollo-server-express');

module.exports = gql`
	extend type Query {
		apology(id: ID!): Apology!
		apologies(first: Int, after: ID): Results!
	}

	extend type Mutation {
		createApology(text: String!): Apology!
		deleteApology(id: ID!): Boolean!
		likeApology(id: ID!): Apology!
	}

	extend type Subscription {
		apologyCreated: Apology!
	}

	type Apology {
		id: ID!
		text: String!
		dateTime: String!
		likes: Int
	}

	type Results {
		totalCount: Int
		results: [Apology!]
	}
`;
