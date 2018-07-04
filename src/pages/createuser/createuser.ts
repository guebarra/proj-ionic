import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UserProvider } from '../../providers/user/user';
import { StorageProvider, User, UsersList } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {
  nome: string;
  usuario: string;
  senha: string;
  confirm: string;
  user: User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider,
    private toast: ToastController
  ){

  }

  setUser(){
    this.user = new User();

    this.user.nome = this.nome;
    this.user.usuario = this.usuario;
    this.user.senha = this.senha;

    this.storageProvider.insertUser(this.user);
    this.toast.create({ message: 'Usuário criado.', duration: 3000, position: 'botton' }).present();
    this.navCtrl.pop();
  }
}
