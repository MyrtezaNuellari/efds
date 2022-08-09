import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
title: string = 'RENT A CAR !';
cars:string[] = [];
searchCars = "";
newCars = "";
  constructor() { }

   ngOnInit(): void {
    this.populateCars()
    
    }
   populateCars() {

    this.cars = [];
    this.cars.push('BMW');
    this.cars.push('Porsche');
    this.cars.push('Audi');
    this.cars.push('Mercedes');
    }
   dataChanged(data:string){
    this.populateCars();
    this.cars = this.cars.filter(f=> 
    f.toLocaleLowerCase().startsWith(data)||f.toLocaleLowerCase().indexOf(data)>0);
 
  }

  addCars(){
    this.cars.push(this.newCars);
  }
}


