import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConfigPage } from '../config/config';
import { SalasPage } from '../salas/salas';
import { HomePage } from '../home/home';

@Component({
	selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage{

  tab1Root = HomePage;
  tab2Root = SalasPage;
  tab3Root = ConfigPage;

  constructor(public navCtrl: NavController) {

  }
}
