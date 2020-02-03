const request = require('supertest');
const should = require('should');
const app = require("../../../app");
const server = require("../../../server");

describe("GET /farmers?term={term}", function()
{
    
  before(() => {
      server.init(app);
  })    
    
  it('should return a list of framers success.', async function() {
    await request(server.handler)
    .get('/farmers?term=ro')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(async response => {
      should(response.body).be.not.null()
      should(response.body).have.property('list');
      should(response.body.list.length).be.equal(1);
      should(response.body.list[0]).have.property('id');
      should(response.body.list[0]).have.property('name');
      should(response.body.list[0]).have.property('document');
      should(response.body.list[0].document).have.property('documentNumber');
      should(response.body.list[0].document).have.property('documentType');
      should(response.body.list[0]).have.property('address');
      should(response.body.list[0].address).have.property('street');
      should(response.body.list[0].address).have.property('state');
      should(response.body.list[0].address).have.property('address');
      should(response.body.list[0].address).have.property('country');
    });
  });
});    