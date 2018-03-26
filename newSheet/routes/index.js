const UserController = require('../controller/user')
const UserModel = require('../model/user')
const SheetController = require('../controller/sheet')
const Session = require('../controller/session')
const config = require('../config/config')
const auth = require('../lib/auth')
const jwt = require('jsonwebtoken')
const error = require('../lib/error')

function isAuthenticated(req, res, next) {
  const token = auth(req)
  jwt.verify(token, config.secretKey, function callback(err, decoded) {
  	if (err) {
  		res.status(401).send(error.noToken())
  	} else {
      UserModel
        .findByAttr('id', decoded.id)
        .then((user) =>{
          const newUser = Object.assign({}, user)
          // The password should not show up in the request
          delete newUser.password
          req.headers.user = JSON.stringify(newUser)
          next()
        })
        .catch(() => res.status(401).send(error.noIdUser()))
    }
  })
}
function hasPrivileges(req, res, next) {
  if (req.headers.user) {
    const user = JSON.parse(req.headers.user)
    if (user.role === 'root' || user.role === 'admin' ) {
      next()
    } else {
      res.status(401).send(error.noPrivileges())
    }
  } else {
    res.status(401).send(error.noUserHeader())
  }
}

// API Server Endpoints
module.exports = function routes(router) {
  // Session group
  router.post('/session', Session.createToken)
  // User Group
  router.post('/users', isAuthenticated, hasPrivileges, UserController.create)
  router.get('/users', isAuthenticated, UserController.getAll)
  router.get('/users/:id', isAuthenticated, UserController.get)
  router.patch('/users/:id', isAuthenticated, hasPrivileges, UserController.update)
  router.delete('/users/:id', isAuthenticated, hasPrivileges, UserController.delete)

  /* //Visit Group
	router.post('/visits', isAuthenticated, Visit.create),
	router.get('/visits', isAuthenticated, Visit.getAll),
	router.get('/visits/:id', isAuthenticated, Visit.get),
	router.patch('/visits/:id', isAuthenticated, Visit.update),
	router.delete('/visits/:id', isAuthenticated, Visit.delete),

  // State Group
	router.post('/states', isAuthenticated, State.create),
	router.get('/states', isAuthenticated, State.getAll),
	router.get('/states/:id', isAuthenticated, State.get),
	router.patch('/states/:id', isAuthenticated, State.update),
	router.delete('/states/:id', isAuthenticated, State.delete),
*/
  // Sheet Group
  router.post('/sheets', isAuthenticated, SheetController.create)
  router.get('/sheets', isAuthenticated, SheetController.getAll)
  router.get('/sheets/:id', isAuthenticated, SheetController.get)
  router.patch('/sheets/:id', isAuthenticated, SheetController.update)
  router.delete('/sheets/:id', isAuthenticated, SheetController.delete)
  
}
