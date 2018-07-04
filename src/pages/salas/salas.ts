import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Database } from '../../providers/database/database';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html'
})

export class SalasPage {
  nome: string;
  descricao: string;
  data: Date;
  lotacao: number;

  constructor() {
  }

  public insert(sala: Sala){
    return this.db.getDB()
    .then((db: SQLiteObject) => {
      let sql = 'insert into salas (name, desc, date, lotacao) values (?, ?, ?, ?)';
      let data = [sala.name, sala.desc, sala.date, sala.lotacao];

      return db.executeSql(sql, data)
        .catch((e) => console.error(e));
    })
    .catch((e) => console.error(e));
  }

  public getSalas(){
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
	}
}
