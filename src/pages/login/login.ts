import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { CreateuserPage } from '../createuser/createuser';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(public navCtrl: NavController, public user: UserProvider){

  }

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  login() {
    console.log('Tentativa de login');
    this.user.autentica(true)
      .then(
        (val) => {
          console.log(val);
          console.log("Login feito!");
          this.navCtrl.push(HomePage);
        },
        (err) => {
          console.log(err);
          console.log("Login não feito!");
          this.user.alerta(err);
          return this.user.erro(err);
        }
      )
      .then(
        (val) => {
          console.log(val);
          this.user.setStoredItem(this.usuario,this.senha,1);
        },
        (err) => {
          console.log(err);
          this.user.alerta(err);
        }
      );
  }

  cadastro() {
    console.log('Cadastro');
    this.navCtrl.push(CreateuserPage);
  }

}

  /*
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
 */
