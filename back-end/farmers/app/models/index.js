const Farmer = require("./data/farmer");
const { SuccessResponse, SuccessListResponse } = require("./responses/success-response");


module.exports = {
  data: { 
    farmer:  Farmer
  },
  responses: {
    success: SuccessResponse,
    successList: SuccessListResponse
  }
}