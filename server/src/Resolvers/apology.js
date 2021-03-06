const Apology = require('../models/Apology');
const pubsub = require('../Subscriptions');

module.exports = {
	Query: {
		apology: (parent, args) => {
			let { id } = args;

			const apology = Apology.findById(id);

			return apology;
		},
		apologies: async (parent, args) => {
			const { first, after} = args;
			//TODO: Hook up from and to dateTime arguments
			const apologiesQuery = !first || !after ? {} : { _id: { $gt: after } };

			const totalCount = await Apology.find({}).countDocuments();

			const results = await Apology.find(apologiesQuery).limit(first);

			const resultsObj = { totalCount, results };

			return resultsObj;
		}
	},

	Mutation: {
		createApology: async (parent, args) => {
			const { text } = args;
			const dateTime = new Date();

			const apology = new Apology({ text, dateTime, likes: 0 });

			const createdApology = await apology.save();

			pubsub.publish('CREATED', {
				apologyCreated: { createdApology }
			});

			return createdApology;
		},

		deleteApology: async (parent, args) => {
			const { id } = args;

			const removed = await Apology.findById(id).remove();
			if (removed) {
				return true;
			} else {
				return false;
			}
		},

		likeApology: async (parent, args) => {
			const { id } = args;

			//TODO: has to be a way to do this in one find
			const { likes } = await Apology.findById(id);

			const likedApology = await Apology.findByIdAndUpdate(id, { $set: { likes: likes + 1 } }, { new: true });

			return likedApology;
		}
	},

	Subscription: {
		apologyCreated: {
			subscribe: () => pubsub.asyncIterator('CREATED')
		}
	}
};
