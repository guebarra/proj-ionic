import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {

  @ViewChild('nome') nome;
  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;
  @ViewChild('confirmasenha') confirmasenha;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user: UserProvider) {
  }

  signUp(){
    if(!this.user.usernameVerify(this.usuario.value)){
      //alerta
    }
    else{
      if(!this.senha.value == this.confirmasenha.value){
        //alerta
      }
      else{
        this.user.createUser(this.nome.value, this.usuario.value, this.senha.value)
        .then(
          () => this.navCtrl.pop(),
          () => console.log("Falha no cadastro!")
        );
      }
    }
  }
}
