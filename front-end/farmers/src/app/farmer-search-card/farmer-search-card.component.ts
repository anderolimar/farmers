import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  value = '';

  constructor() {

  }

  ngOnInit() {
  }

}
