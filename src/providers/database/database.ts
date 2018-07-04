import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

@Injectable()
export class Database {

  constructor(private sqlite: SQLite) {

  }

  public createDB(){
    return this.sqlite.create({
      name: 'db_proj.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      console.log('Entrou aqui');
      this.createTables(db);
      this.insertDefaultItens(db);
    })
    .catch(e => console.error(e));
  }

  private createTables(db: SQLiteObject){
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS users (iduser integer primary key AUTOINCREMENT NOT NULL, name TEXT, user TEXT, pass TEXT)'],
      ['CREATE TABLE IF NOT EXISTS salas (idsala integer primary key AUTOINCREMENT NOT NULL, name TEXT, desc TEXT, date DATE, lotacao INTEGER)']
     ])
     .then(() => console.log('Tabelas criadas'))
     .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  private insertDefaultItens(db: SQLiteObject){
    db.executeSql('select COUNT(id) as qtd from users', {})
    .then((data: any) => {
      //Se não existe nenhum registro
      if (data.rows.item(0).qtd == 0) {

        // Criando as tabelas
        db.sqlBatch([
          ['insert into users (name, user, pass) values (?, ?, ?)', ['Marco', 'marco', 'marco']],
          ['insert into users (name, user, pass) values (?, ?, ?)', ['Guilherme', 'guilherme', 'guilherme']],
          ['insert into salas (name, desc, lotacao) values (?, ?, ?)', ['Estudo Coletivo', 'Vamos todos estudar', '6']],
          ['insert into salas (name, desc, lotacao) values (?, ?, ?)', ['Vamo pro Bar', 'Bora beber aí galera', '12']]
        ])
          .then(() => console.log('Dados padrões incluídos'))
          .catch(e => console.error('Erro ao incluir dados padrões', e));

      }
    })
    .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
  }

}
