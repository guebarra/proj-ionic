import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalProvider } from '../../providers/local/local';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'


})
export class HomePage {

  local:LocalProvider;

  constructor(public navCtrl: NavController, public navParams: NavParams){
  }

  ionViewDidEnter(){
    console.log(this.local);
  }

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage(item) {
    console.log(item);
    this.navCtrl.push(ChatPage,{item:item});
  }

}
