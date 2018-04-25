import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  @ViewChild('user') user;
  @ViewChild('pass') pass;

 constructor(public navCtrl: NavController, public alertCtrl: AlertController){

 }

 signIn(){
   console.log(this.user.value, this.pass.value);
   if(this.user.value == "admin" && this.pass.value == "admin"){
     this.navCtrl.push(TabsPage);
   }
   else{
     this.showAlert();
   }
 }

 showAlert() {
   let alert = this.alertCtrl.create({
     title: 'Erro!',
     subTitle: 'Usuário e/ou Senha inválidos!',
     buttons: ['OK']
   });
   alert.present();
 }
}
