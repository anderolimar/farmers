const should = require('should');
const proxyquire = require("proxyquire");
const Farmer = require('../../../../app/models').data.farmer;

describe("FarmersRepository", function()
{
  describe('.getFarmers', function() {

    it('should return a list success.', async function() {
      const list = [
        new Farmer({ name: 'farmer1' }),
        new Farmer({ name: 'farmer2' })
      ];
      
      const params = {
        name: 'farmer',
        doc: 'farmer'
      }
      
      const expectedCollectionName = "farmers";
      
      const expectedQuery = { 'name': { $lk: params.name }, 'document.documentNumber': { $lk: params.doc }, $or: true };
      
      const FarmersRepository = proxyquire("../../../../app/data/farmers-repository", {
        "../../libs/in-memory-db": {
          db: {
            select: (collection, query)  => {
              should(collection).be.equal(expectedCollectionName);
              should(query).be.deepEqual(expectedQuery);
              return list
            }
          }
        }
      });
      
      let expectedList = await FarmersRepository.getFarmers({ name: 'farmer', doc: 'farmer' });
      should(expectedList).be.deepEqual(list);
    });

  });

});