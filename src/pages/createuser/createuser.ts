import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-createuser',
  templateUrl: 'createuser.html',
})
export class CreateuserPage {
  nome: string;
  usuario: string;
  senha: string;
  confirma: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public user: UserProvider,
  ){

  }

  criar() {
    this.user.comparaString(this.senha,this.confirma)
      .then(
        (val) => {
          console.log(val);
          return this.user.cadastra(this.nome,this.usuario,this.senha);
        },
        (err) => {
          return this.user.erro(err);
        }
      )
      .then(
        (val) => {
          console.log(val);
          this.navCtrl.pop();
        },
        (err) => {
          console.log(err);
          this.user.alerta(err);
        }
      )
  }

}
