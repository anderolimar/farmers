const db = require("../../libs/in-memory-db").db;
const models = require("../models");
const Farmer = models.data.farmer;
const farmersCollectionName = "farmers";

class FarmersRepository {
  static getFarmers({ name, doc }){
    return new Promise((resolve, reject) => {
      const queryfarmers = { 'name': { $lk: name }, 'document.documentNumber': { $lk: doc }, $or: true };
      const farmers = db.select(farmersCollectionName, queryfarmers);

      if(!farmers) resolve(null);
      const farmersList = farmers.map((f) => new Farmer(f));
      resolve(farmersList);
    });
  }   
}

module.exports = FarmersRepository;