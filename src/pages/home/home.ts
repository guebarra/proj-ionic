import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';4
import { ChatPage } from '../chat/chat'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items = [
  	'Violão na praça',
  	'Bora beber',
  	'Estudo coletivo'
  ];

  static get parameters() {
      return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav
  }

  pushChatPage() {
    this.nav.push(ChatPage);
  }

}
