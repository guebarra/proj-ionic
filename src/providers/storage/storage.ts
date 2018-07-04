import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) {

  }

  public insertSala(sala: Sala) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.saveSala(key, sala);
  }
 
  public updateSala(key: string, sala: Sala) {
    return this.saveSala(key, sala);
  }
 
  private saveSala(key: string, sala: Sala) {
    return this.storage.set(key, sala);
  }
 
  public removeSala(key: string) {
    return this.storage.remove(key);
  }
 
  public getAllSalas() {
 
    let salas: SalasList[] = [];
 
    return this.storage.forEach((value: Sala, key: string, iterationNumber: Number) => {
      let sala = new SalasList();
      sala.key = key;
      sala.sala = value;
      salas.push(sala);
    })
      .then(() => {
        return Promise.resolve(salas);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

  public insertUser(user: User) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.saveUser(key, user);
  }
 
  public updateUser(key: string, user: User) {
    return this.saveUser(key, user);
  }
 
  private saveUser(key: string, user: User) {
    return this.storage.set(key, user);
  }
 
  public removeUser(key: string) {
    return this.storage.remove(key);
  }
 
  public getAllUsers() {
 
    let users: UsersList[] = [];
 
    return this.storage.forEach((value: User, key: string, iterationNumber: Number) => {
      let user = new UsersList();
      user.key = key;
      user.user = value;
      users.push(user);
    })
      .then(() => {
        return Promise.resolve(users);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }

}

export class Sala {
  nome: string;
  des: string;
  dist: number;
}

export class SalasList {
  key: string;
  sala: Sala;
}

export class User {
  nome: string;
  usuario: string;
  senha: string;
}

export class UsersList {
  key: string;
  user: User;
}