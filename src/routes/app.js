async function routes (server, options) {
	server.post('/', async (request, reply) => {
		if (request === null || request.body === null || request.body.query === null) {
			throw new Error('A request cannot be empty !');
		}

		return reply.graphql(request.body.query)
	})
}

module.exports = routes
