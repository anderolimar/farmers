import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent {

  value: string;

  constructor() {

  }

  onChange(event: any) {
    console.log(this.value)
  }

}
