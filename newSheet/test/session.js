// // During the test the env variable is set to test
// process.env.NODE_ENV = 'test'
// // Require the dev-dependencies
// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../app')
// const User = require('../model/user')

// chai.use(chaiHttp)
// chai.should()

// /*
// * Test the Session
// */
// describe('/POST session', () => {
//   it('using wrong name and password it should return a error json and satus 401', (done) =>{
//     const login = {
//       name: 'Peter',
//       password: 'batata'
//     }
//     chai.request(app)
//       .post('/session')
//    	.send(login)
//       .end((err, res)=>{
//         res.should.have.status(401)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('There is not user with this Id')
//         done()
//       })
//   })
//   it('Using correct name but wrong password it should return a error json and staus 401', (done) =>{
//     const login = {
//       name: 'root',
//       password: 'batata'
//     }
//     chai.request(app)
//       .post('/session')
//       .send(login)
//       .end((err, res)=>{
//         res.should.have.status(401)
//         res.body.should.be.a('object')
//         res.body.should.have.property('errors')
//         res.body.errors.should.have.property('message').eql('Incorrect password')
//         done()
//       })
//   })
//   it('Using root name and the root password should return status 200 and a json with the token', (done) =>{
//     const login = {
//       name: 'root',
//       password: 'kilombo'
//     }
//     chai.request(app)
//       .post('/session')
//       .send(login)
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('object')
//         res.body.should.have.property('token')
//         done()
//       })
//   })
//   it('Using normal user and user password should return status 200 and a json with the token', (done) =>{
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
//     // We create a new normal user
//     User.create(user)
//     const login = {
//       name: 'Sonia',
//       password: 'kilombo'
//     }
//     chai.request(app)
//       .post('/session')
//       .send(login)
//       .end((err, res)=>{
//         res.should.have.status(200)
//         res.body.should.be.a('object')
//         res.body.should.have.property('token')
//         done()
//       })
//   })
// })


