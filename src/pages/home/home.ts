import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
  	'Violão na praça',
  	'Bora beber',
  	'Estudo coletivo'
  ];

  itemSelected(item: String){
  	console.log("Selected Item", item);
  }

}
