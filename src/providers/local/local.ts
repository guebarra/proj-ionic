import { Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class LocalProvider {

  constructor(private navCtrl: NavController, public geolocation: Geolocation) {

  }

  local() {
    let promise = new Promise((resolve,reject) => {
      this.geolocation.getCurrentPosition()
      .then(
        (coord) => {
          console.log(coord.coords);
          resolve(coord.coords);
        },
        (err) => {
          console.log(err);
          reject(err);
        }
      );

      return promise;
    });
  }

  distancia(meu_local:any,local_sala:any) {
    
    var lat1 = meu_local.latitude*(Math.PI/180);
    var lon1 = meu_local.longitude*(Math.PI/180);
    var lat2 = local_sala.latitude*(Math.PI/180);
    var lon2 = local_sala.longitude*(Math.PI/180);

    var latD = lat2 - lat1;
    var lonD = lon2 - lon1;

    var dist = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(latD/2),2)+Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin(lonD/2),2)));
    dist = dist*6371;

    console.log("distancia " + dist);

    return dist;
  }

}

    /*this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    //console.log(resp.coords);


    CALCULO DA DISTANCIA
    var lat1 = resp.coords.latitude*(Math.PI/180);
    var lon1 = resp.coords.longitude*(Math.PI/180);
    var lat2 = -20.626175*(Math.PI/180);
    var lon2 = -49.649654*(Math.PI/180);

    var latD = lat2 - lat1;
    var lonD = lon2 - lon1;

    var dist = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(latD/2),2)+Math.cos(lat1)*Math.cos(lat2)*Math.pow(Math.sin(lonD/2),2)));
    dist = dist*6371;

    console.log("distancia " + dist);

    }).catch((error) => {
      console.log('Error getting location', error);
    });*/
