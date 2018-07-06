import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-root',
  templateUrl: 'root.html',
})
export class RootPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider) {
    
  }

  ionViewDidEnter() {
  
    this.user.autoLogin()
      .then(
        (val) => {
          console.log(val);
          this.navCtrl.push(HomePage);
        },
        (err) => {
          console.log(err);
          this.navCtrl.push(LoginPage);
        }
      );
  
  }

}
