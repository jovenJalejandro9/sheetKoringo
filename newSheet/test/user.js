// /* eslint-env mocha */

// // During the test the env variable is set to test
// process.env.NODE_ENV = 'test'
// // Require the dev-dependencies
// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../app')
// const User = require('../model/user')
// const chaiThings = require('chai-things')
// chai.use(chaiHttp)
// chai.should()
// chai.use(chaiThings)

// /*
// * Test the User
// */

// /*
// * POST user
// */
// describe('/POST user', () => {
//   it('Without the compulsory fields', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     const user = {
//       name: 'Esteban',
//       // "firstSurname": "Rodriguez",
//       // "secondSurname": "Perez",
//       password: 'kilombo',
//       tel: '300330022',
//       address: 'c/ Vinto'
//     }
//     // We empty de User db
//     User.emptyUsers()
//     chai.request(app)
//       .post('/users')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//    	.send(user)
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('A new user need at least the fields name, firstSurname, secondSurname, tel and address')
//         done()
//       })
//   })
//   it('With a incorrect role. It should normal or admin. By default is normal', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     const user = {
//       name: 'Sonia',
//       first_surname: 'Lolo',
//       second_surname: 'Aria',
//       nickname: 'Sonya',
//       email: 'sonialolo@gmail.com:',
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
//       role: 'almirant'
//     }
//     chai.request(app)
//       .post('/users')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send(user)
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('Incorrect Role')
//         done()
//       })
//   })
//   it('With the minimun compulsory fileds. We do not fill in the role field. By default is "normal"', (done) =>{
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
//       ]
//     }

//     // We empty de User db
//     User.emptyUsers()
//     chai.request(app)
//       .post('/users')
//       .set('user', '{"role":"admin"}')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send(user)
//       .end((err, res)=>{
//         res.should.have.status(201)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eq(2)
//         res.body[0].should.have.property('id').eql(1)
//         done()
//       })
//   })
// })

// /*
// * GET user
// */
// describe('/GET  user', () => {
//   before(function setUp() {
//     // We empty de User db
//     User.emptyUsers()
//   })
//   it('Just with the root in  the DB. We can do this action with a normal user', (done) =>{
//     chai.request(app)
//       .get('/users')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')

//       .send()
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eq(1)
//         done()
//       })
//   })
//   it('with more users in the db', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     const user = {
//       name: 'Esteban',
//       firstSurname: 'Rodriguez',
//       secondSurname: 'Perez',
//       password: 'kilombo',
//       tel: '300330022',
//       address: 'c/ Vinto'
//     }
//     // We create a new normal user
//     User.add(user)

//     chai.request(app)
//       .get('/users')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eq(2)
//         res.body.should.include.something.that.deep.equals({
//           name: 'Esteban',
//           firstSurname: 'Rodriguez',
//           secondSurname: 'Perez',
//           password: 'kilombo',
//           tel: '300330022',
//           address: 'c/ Vinto'
//         })
//         done()
//       })
//   })
// })

// /*
// * GET user/:id
// */
// describe('/GET/:id user', () => {
//   it('with a wrong id. We can do this action with a normal user', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     chai.request(app)
//       .get('/users/22')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"normal"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('There is not user with this Id')
//         done()
//       })
//   })
//   it('with a correct id', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     chai.request(app)
//       .get('/users/1')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('object')
//         done()
//       })
//   })
// })
// /*
// * DELETE user
// */
// describe('/DELETE  user', () => {
//   before(function setUp() {
//     // We empty de User db
//     User.emptyUsers()
//     const user = {
//       name: 'Esteban',
//       firstSurname: 'Rodriguez',
//       secondSurname: 'Perez',
//       password: -712138119,
//       tel: '300330022',
//       address: 'c/ Vinto',
//       role: 'normal',
//       id: 2
//     }
//     // We create a new normal user
//     User.add(user)
//   })
//   it('With a bad id ', (done) =>{
//     chai.request(app)
//       .delete('/users/22')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('There is not user with this Id')
//         done()
//       })
//   })

//   it('with a correct id', (done) =>{
//     chai.request(app)
//       .delete('/users/2')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eq(1)
//         done()
//       })
//   })
// })

// /*
// * PATCH user/:id
// */
// describe('/PATCH/:id user', () => {
//   before(function setUp() {
//     const user = {
//       name: 'Esteban',
//       firstSurname: 'Rodriguez',
//       secondSurname: 'Perez',
//       password: 'kilombo',
//       tel: '300330022',
//       address: 'c/ Vinto',
//       id: 20
//     }
//     User.add(user)
//   })
//   it('with a wrong id', (done) =>{

//     chai.request(app)
//       .patch('/users/22')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send()
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('There is not user with this Id')
//         done()
//       })
//   })
//   it('Updating with a incorrect role. It should normal or admin', (done) =>{
//     const change = {
//       role: 'almirant'
//     }
//     chai.request(app)
//       .patch('/users/20')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send(change)
//       .end((err, res)=>{
//         res.should.have.status(400)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('Incorrect Role')
//         done()
//       })
//   })
//   it('With a correct id and updating a current value', (done) =>{
//     // We empty de User db
//     User.emptyUsers()
//     const change = {
//       name: 'Roberto'
//     }
//     const user = {
//       name: 'Esteban',
//       firstSurname: 'Rodriguez',
//       secondSurname: 'Perez',
//       id: 45
//     }
//     User.add(user)
//     chai.request(app)
//       .patch('/users/45')
//       .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMDQzMzE5fQ.u25KdsjXHaVU3G3PQgPiFy7KIWbfdIi6NyT6qjIQP3o')
//       .set('user', '{"role":"admin"}')
//       .send(change)
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('array')
//         res.body.length.should.be.eq(2)
//         res.body.should.be.a('array').that.include({
//           name: 'Roberto',
//           firstSurname: 'Rodriguez',
//           secondSurname: 'Perez',
//           id: 45
//         })
//         done()
//       })
//   })
// })


