import { Farmer } from '../model/farmer';
import { SearchParams } from '../model/search-params';
import { FarmerSearchAbstractProvider } from './farmer-search-abstract-provider';

export class FarmerSearchProvider implements FarmerSearchAbstractProvider {

  farmers: Farmer[] = [
    { id: '1',
      name: 'João Lucas',
      document: {
        documentNumber : '1234567890',
        documentType: 'CNH'
      },
      address: {
        address: 'Rua Hum, 001 - SP - Brasil',
        country: 'Brasil',
        state: 'SP',
        street: 'Rua Hum, 001'
      }
    },
    { id: '2',
      name: 'Roberto Freitas',
      document: {
        documentNumber : '54545454545',
        documentType: 'CNH'
      },
      address: {
        address: 'Rua Dois, 002 - SP - Brasil',
        country: 'Brasil',
        state: 'SP',
        street: 'Rua Dois, 002'
      }
    },
    { id: '3',
      name: 'Roberto Dias',
      document: {
        documentNumber : '323232323232',
        documentType: 'CNH'
      },
      address: {
        address: 'Rua Tres Dois, 32 - SP - Brasil',
        country: 'Brasil',
        state: 'SP',
        street: 'Rua Tres Dois, 32'
      }
    }
  ];

  async searchFarmers(params: SearchParams): Promise<Farmer[]> {
    const result = this.farmers.filter(
      farmer => farmer.name.toLowerCase().indexOf(params.term.toLowerCase()) > -1
        || farmer.document.documentNumber.indexOf(params.term) > -1
    );
    console.log(result)
    return Promise.resolve(result);
  }
}
