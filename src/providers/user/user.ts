import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class UserProvider {

  private username: String;
  private password: String;
  private radius: Number;

  constructor(public alertCtrl: AlertController) {

  }

  private getStoredItem(){
    let promise = new Promise((resolve,reject) => {
      this.username = localStorage.getItem("StoredUser");
      this.password = localStorage.getItem("StoredPass");
      this.radius = localStorage.getItem("StoredRadius");
      resolve('Checagem feita no local storage!');
    });
  
    return promise;
  }

  setStoredItem(user: string, pass: string, radius: number){
    localStorage.setItem("StoredUser", user);
    localStorage.setItem("StoredPass", pass);
    localStorage.setItem("StoredRadius",radius);
  }

  autentica(res:boolean) {
    let promise = new Promise((resolve,reject) => {
      if(/*autenticar usuário com firebase*/res)
        resolve('Usuário cadastrado!');
      else
        reject('Usuário não cadastrado!');
    });

    return promise;
  }

  autoLogin() {
    let promise = new Promise((resolve,reject) => {
      this.getStoredItem()
      .then(
        (val) => {
          console.log(val);
          return this.autentica(true);
        },
        (err) => {
          console.log(err);
        }
      )
      .then(
        (val) => {
          console.log(val);
          resolve('Login feito!');
        },
        (err) => {
          console.log(err);
          reject('Login não feito!');
        }
      )
    });

    return promise;
  }

  alerta(err:string) {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: err,
      buttons: ['OK']
    });
    alert.present();
  }

  comparaString(str1:String,str2:String) {
    let promise = new Promise((resolve,reject) => {
      if(str1.localeCompare(str2) == 0)
        resolve('Senhas iguais!');
      else
        reject('Senhas diferentes');
    });

    return promise;
  }

  cadastra(nome:string,user:string,senha:string) {
    /*CADASTRAR FIREBASE*/
    let promise = new Promise((resolve,reject) => {
      if(/*FIREBASE*/true)
        resolve('Cadastro feito');
      else
        reject('Cadastro não feito');
    });

    return promise;
  }

  erro(err) {
    return Promise.reject(err);
  };

}
