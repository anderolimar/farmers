const models = require('../models');
const FarmerBusiness = require('../business').farmers;
const SuccessListResponse = models.responses.successList;

class FarmersController {
  static async listFarmers(req, res, next) {
    try {
      const { term } = req.query;
      const farmers = await FarmerBusiness.findByNameOrDocument(term);
      const response = new SuccessListResponse(farmers)
      res.status(response.status).json(response.content);
    }
    catch(err){
      next(err);
    }
  }

}

module.exports = FarmersController;