import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){

  }

  items = [
  	'Violão na praça',
  	'Bora beber',
  	'Estudo coletivo'
  ];

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage() {
    this.navCtrl.push(ChatPage);
  }

}
