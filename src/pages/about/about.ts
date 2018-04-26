import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  logOut(){
    LoginPage.setStoredItem('','');
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

}
