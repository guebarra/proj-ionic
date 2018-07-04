import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider) {

  }

  logOut(){
    this.userProvider.setStoredItem('','');
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.popToRoot();
  }

}
