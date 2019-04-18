import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = ListPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
