//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  private username: String;
  private password: String;

  constructor() {

  }

  private getStoredItem(){
    var i = 0;
     return new Promise((resolve, reject) => {
       localStorage.getItem("StoredUser")
       .then(
         (val)=> {
           this.username = val;
           if(++i == 2) resolve();
         }
       ),
       localStorage.getItem("StoredPass")
       .then(
         (val)=> {
           this.password = val;
           if(++i == 2) resolve();
         }
       )
     });
  }

  private setStoredItem(user: string, pass: string){
    var i = 0;
    return new Promise((resolve, reject) => {
      localStorage.setItem("StoredUser", user)
      .then(
        ()=> if(++i == 2) resolve("Funfou User!");
      ),
      localStorage.setItem("StoredPass", pass)
      .then(
        ()=> if(++i == 2) resolve("Funfou Senha!");
      )
    });
  }

  private autentica(){
    if(this.username == "admin" && this.password == "admin"){
      return true;
    }
    return false;
  }

  private autoLogIn(){
    return this.getStoredItem()
    .then(
      ()=>{
        if(this.autentica()){
          resolve();
        }
      reject();
      }
    );
  }

  private logIn(user: String, pass: String){
    this.username = user;
    this.password = pass;

    if(this.autentica()){
      this.setStoredItem(this.username, this.password);
      return true;
    }

    return false;
  }

  private usernameVerify(user: String){
    return true;
  }

  private createUser(name: String, user: String, pass: String){
    return this.setStoredItem(user, pass)
    .then(
      () => resolve(),
      () => reject()
    ); //depois tem que tirar essa bosta
  }
}
