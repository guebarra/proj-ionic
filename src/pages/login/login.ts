import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CreateuserPage } from '../createuser/createuser';

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

  private username: String;
  private password: String;

  @ViewChild('user') user;
  @ViewChild('pass') pass;

 constructor(public navCtrl: NavController, public alertCtrl: AlertController){
 }

 private getStoredItem(){
   this.username = localStorage.getItem("StoredUser");
   this.password = localStorage.getItem("StoredPass");
 }

 static setStoredItem(user: string, pass: string){
   localStorage.setItem("StoredUser", user);
   localStorage.setItem("StoredPass", pass);
 }

 //essa função será declarada na splash, para evitar que a página "login" seja exibida
 ionViewDidEnter(){
  this.getStoredItem();

    if(this.username != "" && this.password != ""){
      this.navCtrl.push(TabsPage);
    }
  }

  signIn(){
    if(this.username == this.user.value && this.password == this.pass.value){
      this.navCtrl.push(TabsPage);
    }
    else{
    }
  }

 pushCreatePage(){
   this.navCtrl.push(CreateuserPage);
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
