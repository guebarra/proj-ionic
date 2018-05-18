import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CreateuserPage } from '../createuser/createuser';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public user: UserProvider){

  }

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  ionViewDidEnter(){
     this.user.autoLogIn().then(()=>{
       this.navCtrl.push(TabsPage);
     }, ()=>{
       console.log("Falha de Autenticação !!");
     });
  }

  signIn(){
    if(this.user.logIn(this.usuario.value, this.senha.value)){
      this.navCtrl.push(TabsPage);
    }
    else{
      this.showAlert();
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
