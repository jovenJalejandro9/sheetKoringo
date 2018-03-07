var User= require('../controller/user');

// API Server Endpoints
module.exports = function(router){
	router.post('/users', User.create),
	router.get('/users', User.getAll),
	router.get('/users/:id', User.get),
	router.patch('/users/:id', User.update),
	router.delete('/users/:id', User.delete)
}
