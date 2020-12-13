async function routes (server, options) {
	server.get('/', async (request, reply) => {
		const app = {name: process.env.API_NAME, status: 'RUNNING'};
		return app;
	})
}

module.exports = routes
