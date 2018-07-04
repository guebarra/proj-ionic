import { Component } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Geolocation } from '@ionic-native/geolocation';
import { NavController, ToastController } from 'ionic-angular';
import { StorageProvider, Sala, SalasList } from '../../providers/storage/storage';

@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html'
})

export class SalasPage {
  nome: string;
  des: string;
  dist: number;
  sala: Sala;

  salas: SalasList[];

  constructor(
    private navCtrl: NavController,
    private geolocation: Geolocation,
    private storageProvider: StorageProvider,
    private toast: ToastController
  ) {
      this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      //console.log(resp.coords);


      /* CALCULO DA DISTANCIA
      var lat1 = resp.coords.latitude*(Math.PI/180);
      var lon1 = resp.coords.longitude*(Math.PI/180);
      var lat2 = -20.626175*(Math.PI/180);
      var lon2 = -49.649654*(Math.PI/180);

      var latD = lat2 - lat1;
      var lonD = lon2 - lon1;

      var dist = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(latD/2),2)+Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin(lonD/2),2)));
      dist = dist*6371;

      console.log("distancia " + dist);
      */

      }).catch((error) => {
        console.log('Error getting location', error);
      });


  }



  public setSala(){
    this.sala = new Sala();

    this.sala.nome = this.nome;
    this.sala.des = this.des;
    this.sala.dist = this.dist;

    this.storageProvider.insertSala(this.sala);
    this.toast.create({ message: 'Sala salva.', duration: 3000, position: 'botton' }).present();
  }

  /*public getSalas(){
    return this.db.getDB()
    .then((db: SQLiteObject) => {
      let sql = 'select * from products'; //where distância = 1km

      return db.executeSql(sql, data)
        .then((data: any) => {
          if(data.rows.length > 0){
            let salas: any[] = [];

            for(var i=0; i<data.rows.length; i++){
              var sala = data.rows.item(i);
              salas.push(sala);
            }
            return salas;
          } else {
            return [];
          }
        })
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

	stpSelect(){
		console.log('STP selected');
	}*/
}
