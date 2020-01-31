class Document {
  constructor(args) {
      const currArgs = args || {}; 
      this.documentNumber =  currArgs.documentNumber;
      this.documentType = currArgs.documentType;
  }
  
}


module.exports = Document;