import { Injectable } from '@angular/core';
import { Farmer, FarmerList } from '../model/farmer';
import { SearchParams } from '../model/search-params';
import { FarmerSearchAbstractProvider } from './farmer-search-abstract-provider';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const searchUrl = `${environment.farmersApiUrl}/farmers?term={term}`

@Injectable()
export class FarmerSearchProvider implements FarmerSearchAbstractProvider {

  constructor(private http: HttpClient) { }

  async searchFarmers(params: SearchParams): Promise<Farmer[]> {
    const result = await this.http.get<FarmerList>(searchUrl.replace('{term}', params.term)).toPromise();
    return Promise.resolve(result.list);
  }
}
