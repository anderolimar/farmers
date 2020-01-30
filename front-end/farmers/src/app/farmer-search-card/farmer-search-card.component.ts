import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from '../providers/farmer-search-abstract-provider';
import { Farmer } from '../model/farmer';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent {

  value: string;
  farmers: Farmer[] = [];

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;
  @Output() onFarmerSelectedEvent = new EventEmitter();

  constructor() {

  }

  async onKey(event: any) {
    if(event && event.keyCode && event.keyCode == 13) {
      this.searchFarmer();
    }
  }

  async onClick(event: any) {
    console.log('CLICK');
    this.searchFarmer();
  }

  async searchFarmer() {
    if(this.farmerSearchAbstractProvider) {
      const result = await this.farmerSearchAbstractProvider.searchFarmers({ term: this.value });
      this.farmers = result;
      this.onFarmerSelectedEvent.emit(result);
    }
  }

}
