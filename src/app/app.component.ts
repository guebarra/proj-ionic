import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { CreateuserPage } from '../pages/createuser/createuser';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      db.createDB()
      .then(() => {
        console.log('DB criado/lido com sucesso!');
      })
      .catch(() => {
        console.log('Erro ao ler/criar DB');
      });
    }
  }
}
