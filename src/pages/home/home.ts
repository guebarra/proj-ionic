import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.retornaSalas();
  }

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage(item) {
    console.log(item);
    this.navCtrl.push(ChatPage,{item:item});
  }

  retornaSalas() {
    //Fazer requisição no servidor e retornar salas
    this.salas = [
      {nomeDaSala: "Blablabla", des: "Bla", dist: "26"},
      {nomeDaSala: "BleBleBle", des: "Ble", dist: "15"},
      {nomeDaSala: "Piolho", des: "Scabin", dist: "50"},
      {nomeDaSala: "Macarrão", des: "alho e oleo", dist: "2"}
    ];
  }

  getItems(ev: any) {
    this.retornaSalas();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.salas = this.salas.filter((sala) => {
        return (sala.nomeDaSala.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
