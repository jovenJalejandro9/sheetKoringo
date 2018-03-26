const util = require('../lib/utils')
const error = require('../lib/error')
const attrsUser = ['name', 'first_surname', 'second_surname', 'nickname', 'password', 'email', 'birthday', 'studies', 'porfessions', 'prev_volunteering', 'role']
const user1 = {
  id: 1,
  name: 'root',
  password: -712138119,
  role: 'root'
}
let collection = [user1]
let idUser = collection.length

module.exports = {
  create: (initialBody) => {
    const body = util.pick(initialBody, attrsUser)
    if (body.hasOwnProperty('name')
      && body.hasOwnProperty('first_surname') && body.hasOwnProperty('second_surname')
      && body.hasOwnProperty('nickname') && body.hasOwnProperty('email')
      && body.hasOwnProperty('birthday') && body.hasOwnProperty('studies')
      && body.hasOwnProperty('porfessions') && body.hasOwnProperty('prev_volunteering')) {
      const user = Object.assign({}, body)
      if (!user.hasOwnProperty('role')) {
        user.role = 'normal'
      }
      if (user.role !== 'normal' && user.role !== 'admin') {
        return Promise.reject(error.incorrectRole())
      }
      // Creating the new user
      idUser ++
      user.id = idUser
      // Creating the pasword
      user.password = util.hashCode(user.password)
      collection.push(user)
      user.published_at = util.getDate()
      return Promise.resolve(collection)
    }
    return Promise.reject(error.noInfoCreateUser())
  },
  getAll: () => {
    if (collection.length <= 0) {
      return Promise.reject(error.noUsers())
    }
    return Promise.resolve(collection)
  },
  get: (id) => {
    const user = collection.find(function condition(ele) {
      return ele.id === id
    })
    if (user === undefined) {
      return Promise.reject(error.noIdUser())
    }
    return Promise.resolve(user)

  },
  updateById: (id, initialBody) => {
    const body = util.pick(initialBody, attrsUser)
    if (body.hasOwnProperty('id')) {
      return Promise.reject(error.noId())
    }
    if (body.hasOwnProperty('role')) {
      if (body.role !== 'normal' && body.role !== 'admin') {
        return Promise.reject(error.incorrectRole())
      }
    }
    const auxCollection = util.replace(collection, parseInt(id, 10), body)
    auxCollection
      .then((newcollection) => {
        collection = newcollection
      })
    return auxCollection

  },
  removeById: (id) => {
    let idFound = false
    collection = collection.filter(function condition(ele) {
      if (ele.id === id) {
        idFound = true
      }
      return ele.id !== id
    })
    if (idFound) {
      return Promise.resolve(collection)
    }
    return Promise.reject(error.noIdUser())

  },
  authenticate: (name, password) =>{
    const user = collection.find(function condition(ele) {
      return ele.name === name
    })
    if (!user) return Promise.reject(error.noIdUser())
    if (user.password === util.hashCode(password)) return Promise.resolve(user)
    return Promise.reject(error.incorrectPsw())
  },
  findByAttr: (attr, value) => {
    return util.findByAttr(collection, attr, value)
  },
  // Function for tests
  add: (body) =>{
    collection.push(body)
  },
  emptyUsers: () => {
    const EmptyDB = collection.filter(function condition(ele) {
      return ele.role === 'root'
    })
    collection = EmptyDB
  },
  getCollection: () => {
    return collection
  }
}
