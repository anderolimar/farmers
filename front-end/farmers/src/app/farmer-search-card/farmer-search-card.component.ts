import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FarmerSearchAbstractProvider } from '../providers/farmer-search-abstract-provider';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent {

  value: string;
  
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
    this.searchFarmer();
  }  
  
  async searchFarmer() {
    console.log(this.value)
    if(this.farmerSearchAbstractProvider) {
      const result = await this.farmerSearchAbstractProvider.searchFarmers({ term: this.value });
      this.onFarmerSelectedEvent.emit(result);
    }    
  }

}
