const models = require('../models');
const FarmersRepository = require('../data').farmers;

class SpaceBusiness {
  static async findByNameOrDocument(term){
    const farmers = await FarmersRepository.getFarmers({ name: term, doc: term });
    return farmers;
  }

}

module.exports = SpaceBusiness;