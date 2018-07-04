import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseProvider {
  private isOpen: boolean;

  constructor(private sqlite: SQLite) {
    this.isOpen = false;
  }

  public createDB(){
    return this.sqlite.create({
      name: 'db_proj.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      this.isOpen = true;
      this.createTables(db);
      this.insertDefaultItens(db);
    })
    .catch(e => console.error(e));
  }

  private createTables(db: SQLiteObject){
    db.sqlBatch(["CREATE TABLE IF NOT EXISTS salas (iduser integer primary key AUTOINCREMENT NOT NULL, name TEXT, desc TEXT, dist INTEGER)"])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.log(e));
  }

  private insertDefaultItens(db: SQLiteObject){
    db.executeSql('SELECT COUNT(id) AS qtd FROM salas', {})
    .then((data: any) => {

      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        //Inserindo dados padrões
        db.sqlBatch([
          ['INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', ['Estudo Coletivo', 'Vamos todos estudar', 6]],
          ['INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', ['Vamo pro Bar', 'Bora beber aí galera', 12]]
        ])
        .then(() => console.log('Dados padrões incluídos'))
        .catch(e => console.log('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }

  public getIsOpen(){
    return this.isOpen;
  }

  public insert(nome: string, des: string, dist: number){
    let db: SQLiteObject;
    console.log(nome, des, dist);

    db.executeSql('INSERT INTO salas (name, des, dist) VALUES (?, ?, ?)', [nome, des, dist]);
  }
}
