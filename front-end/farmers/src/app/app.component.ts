import { Component } from '@angular/core';
import { FarmerSearchProvider } from './providers/framer-search-provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmers';
  farmerSearchProvider: FarmerSearchProvider;

  constructor(farmerSearchProvider: FarmerSearchProvider){
    this.farmerSearchProvider = farmerSearchProvider;
  }
}
