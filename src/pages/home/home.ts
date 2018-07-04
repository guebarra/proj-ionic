import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { StorageProvider, Sala, SalasList } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  salas: SalasList[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storageProvider: StorageProvider,
    private toast: ToastController){
    //this.retornaSalas();
  }

  ionViewDidEnter(){
    /*this.storageProvider.getAllSalas()
    .then((result) => {
      this.salas = result;
    })
    .catch(e => console.error(e));*/
  }

  static get parameters() {
      return [[NavController]];
  }

  pushChatPage(item) {
    console.log(item);
    this.navCtrl.push(ChatPage,{item:item});
  }

  /*public retornaSalas() {
    this.storageProvider.getAllSalas()
    .then(results => {
      this.salas = results;
    })
  }*/

  /*getItems(ev: any) {
    this.retornaSalas();
    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.salas = this.salas.filter((sala) => {
        return (sala.nomeDaSala.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/

}
