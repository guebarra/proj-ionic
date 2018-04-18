import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
	lotation: number;

	stpSelect(){
		console.log('STP selected');
	}
}
