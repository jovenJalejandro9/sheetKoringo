//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let User = require('../model/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);
/*
  * Test the /GET route
  */
describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai.request(app)
          .get('/users')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(2);
            done();
          });
    });
});

