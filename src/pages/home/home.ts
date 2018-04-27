import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private geolocation: Geolocation){

  }

  getLocation(){
    geolocation.getCurrentPosition().then(res => {
      alert("Latitude: " + res.coords.latitude);
      alert("Longitude: " + res.coords.longitude);
    }).catch(() => {
      alert("Erro de localização");
    });
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
    this.getLocation();
  }

}
