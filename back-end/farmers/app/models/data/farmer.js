const Document = require('./document')
const Address = require('./address')


class Farmer {
  constructor(args) {
      const currArgs = args || {}; 
      this._id = currArgs._id || null;
      this.id = this._id;
      this.name =  currArgs.name;
      this.document = new Document(currArgs.document);
      this.address = new Address(currArgs.address);
  }
  
  toObject() {
      const obj = Object.assign({}, this)
      obj.document = Object.assign({}, obj.document )
      obj.address = Object.assign({}, obj.address )
      return obj;
  }
}


module.exports = Farmer;