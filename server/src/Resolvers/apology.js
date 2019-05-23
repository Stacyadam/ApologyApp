const uuidv4 = require('uuid/v4');

module.exports = {
	Query: {
		apology: (parent, args) => {
			let { id } = args;
			id = parseInt(id);

			if (id === 1) {
				return { id, text: 'some apology'};
			}
			if (id === 2) {
				return { id, text: 'an even better apology'};
			}
		},
		apologies: (parent, args, { from, to }) => {
			return [{ id: 1, text: 'some apology'}, { id: 2, text: 'another apology'}]
		}
	},

	Mutation: {
		createApology: (parent, args) => {
			const { text } = args;
			return { id: uuidv4(), text }
		},

		deleteApology: (parent, args) => {
			const { id } = args;
			if (id) {
				return true
			}
		},

		likeApology: (parent, args) => {
			const { id } = args;
			return { id, text: 'some apology' }
		}
	}
};
