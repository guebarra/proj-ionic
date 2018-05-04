import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {

  @ViewChild('user') user;
  @ViewChild('pass') pass;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signUp(user: string, pass: string){
    LoginPage.setStoredItem(this.user.value, this.pass.value);
    this.navCtrl.pop();
  }
}
