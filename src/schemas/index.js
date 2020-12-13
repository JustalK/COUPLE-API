const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType } = graphql
const question_type = require('./question')

// Export the schema
module.exports = (server) => ({
	get_root: () => {
		return new GraphQLObjectType({
			name: 'RootQueryType',
			fields: {
				questions: {
					type: question_type,
					resolve(parent) {
						console.log('beh')
						return true;
					}
				}
			}
		})
	},
	get_graph_ql: () => {
		return new GraphQLSchema({
			query: module.exports(server).get_root()
		})
	}
});
