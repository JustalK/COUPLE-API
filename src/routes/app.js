async function routes (server, options) {
	server.get('/', async (request, reply) => {
		return { hello: 'world' }
	})
}

module.exports = routes
