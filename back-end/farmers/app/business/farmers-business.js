const FarmersRepository = require('../data').farmers;

class FarmersBusiness {
  static async findByNameOrDocument(term){
    const farmers = await FarmersRepository.getFarmers({ name: term, doc: term });
    return farmers;
  }

}

module.exports = FarmersBusiness;