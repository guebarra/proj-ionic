//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {

  private username: String;
  private password: String;

  constructor() {

  }

  private getStoredItem(){
    this.username = localStorage.getItem("StoredUser");
    this.password = localStorage.getItem("StoredPass");
  }

  private setStoredItem(user: string, pass: string){
    localStorage.setItem("StoredUser", user);
    localStorage.setItem("StoredPass", pass);
  }

  private autentica(){
    if(this.username == "admin" && this.password == "admin"){
      return true;
    }

    return false;
  }

  private autoLogIn(){
    this.getStoredItem();

    if(this.autentica()){
      return true;
    }

    return false;
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
    //comunicação com o servidor
    this.setStoredItem(user, pass); //depois tem que tirar essa bosta
  }
}
