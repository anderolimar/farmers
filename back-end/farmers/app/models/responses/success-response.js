class SuccessResponse {
  constructor(result){
    this.status = 200;
    this.content = result;
  }
}

class SuccessListResponse extends SuccessResponse {
  constructor(result){
    super({ list: result });
  }
}

module.exports = { 
    SuccessResponse,
    SuccessListResponse
}