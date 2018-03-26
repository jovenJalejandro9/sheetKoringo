// // eslint-env mocha 

// // During the test the env variable is set to test
// process.env.NODE_ENV = 'test'
// // Require the dev-dependencies
// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../app')
// const User = require('../model/user')
// const config = require('../config/config')
// const chaiThings = require('chai-things')
// const jwt = require('jsonwebtoken')
// chai.use(chaiHttp)
// chai.should()
// chai.use(chaiThings)

// describe('Checking the privileges', () => {
//   beforeEach(function setUp() {
//     User.emptyUsers()
//   })
//   it('With a wrong token in the request', (done) =>{
//     chai.request(app)
//       .get('/users')
//       .set('authorization', 'Bearer u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .end((err, res)=>{
//         res.should.have.status(401)
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('Incorrect token')
//         done()
//       })
//   })
//   it('Without token in the request', (done) =>{
//     chai.request(app)
//       .get('/users')
//       .set('user', '{"role":"admin"}')
//       .end((err, res)=>{
//         res.should.have.status(401)
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('Incorrect token')
//         done()
//       })
//   })
//   it('Without root or admin user in the request', (done) =>{
//     const user = {
//       name: 'Sonia',
//       first_surname: 'Lolo',
//       second_surname: 'Aria',
//       nickname: 'Sonya',
//       email: 'sonialolo@gmail.com:',
//       password: 'kilombo',
//       birthday: '1984-01-12',
//       studies: [
//         'journalism',
//         'psychology'
//       ],
//       porfessions: [
//         'teacher',
//         'psychologist'
//       ],
//       prev_volunteering: [
//         'AMI3'
//       ],
//       role: 'normal'
//     }
//     User.create(user)
//     User.findByAttr('name', 'Sonia')
//       .then((userFound)=>{
//         const token = jwt.sign({id: userFound.id }, config.secretKey)
//         chai.request(app)
//           .post('/users')
//           .set('authorization', 'Bearer ' + token)
//           .end((err, res)=>{
//             res.should.have.status(401)
//             res.body.should.have.property('errors')
//             res.body.errors.should.have.property('message').eql('The user do not have the privileges')
//             done()
//           })
//       })
//       .catch(()=> {
//         done()
//       })
//   })
// })
