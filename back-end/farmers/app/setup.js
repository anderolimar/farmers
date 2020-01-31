const db = require('../libs/in-memory-db').db;
const Farmer = require('./models').data.farmer;

const farmerList = [
  new Farmer({ name: 'João Martins', 
    document: { documentNumber : '1234567890', documentType: 'CNH' },
    address: { address: 'Rua Hum, 001 - SP - Brasil', country: 'Brasil', state: 'SP', street: 'Rua Hum, 001'}
  }),
  new Farmer({ name: 'Roberto Lopes', 
    document: { documentNumber : '52535455565', documentType: 'CNH' },
    address: { address: 'Rua Dois, 002 - SP - Brasil', country: 'Brasil', state: 'SP', street: 'Rua Hum, 002'}
  }),
  new Farmer({ name: 'João Lucas', 
    document: { documentNumber : '11122233344', documentType: 'CNH' },
    address: { address: 'Rua Tres, 003 - RJ - Brasil', country: 'Brasil', state: 'RJ', street: 'Rua Tres, 003'}
  }),
  new Farmer({ name: 'Fabio Lucas', 
    document: { documentNumber : '52535455567', documentType: 'CNH' },
    address: { address: 'Rua Quatro, 004 - RN - Brasil', country: 'Brasil', state: 'RN', street: 'Rua Quatro, 004'}
  })
]


class Setup {
  static start(){
    initDb();
  }
}
 
function initDb(){
  if(!db.hasCollection("farmers")) {
      db.createCollection("farmers");
  }
  
  farmerList.forEach(farmer => db.insert("farmers", farmer.toObject()))
}

module.exports = Setup;