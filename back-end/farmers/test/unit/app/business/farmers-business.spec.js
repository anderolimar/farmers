const should = require('should');
const proxyquire = require("proxyquire");
const Farmer = require('../../../../app/models').data.farmer;

describe("FarmersBusiness", function()
{
  describe('.getFarmers', function() {

    it('should return a list success.', async function() {
      const list = [
        new Farmer({ name: 'farmer1' }),
        new Farmer({ name: 'farmer2' })
      ];
      
      const term = 'farmer';
      
      const expectedParams = {
        name: term,
        doc: term
      }
      
      const FarmersBusiness = proxyquire("../../../../app/business/farmers-business", {
        '../data': {
          farmers: {
            getFarmers: (params)  => {
              should(params).be.deepEqual(expectedParams);
              return Promise.resolve(list);
            }
          }
        }
      });
      
      let expectedList = await FarmersBusiness.findByNameOrDocument(term);
      should(expectedList).be.deepEqual(list);
    });

  });

});