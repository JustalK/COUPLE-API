// Import External Dependancies
const graphql = require('graphql')

// Destructure GraphQL functions
const {
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLID,
	GraphQLList,
	GraphQLNonNull
} = graphql

// Define Object Types
module.exports = new GraphQLObjectType({
	name: 'Question',
	fields: () => ({
		_id: {
			type: GraphQLID
		},
		question: {
			type: GraphQLString
		}
	})
})
