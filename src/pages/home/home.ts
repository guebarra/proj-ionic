import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){

  }

  cards = [
  	{nomeDaSala: "Violão na Praça", des: "Bora violar na praça", dist: "26"}
  ];

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage() {
    this.navCtrl.push(ChatPage);
  }

}
