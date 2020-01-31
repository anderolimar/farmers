class Address {
  constructor(args) {
      const currArgs = args || {}; 
      this.street =  currArgs.street;
      this.state = currArgs.state;
      this.address = currArgs.address;
      this.country = currArgs.country;
  }
  
}

module.exports = Address;
