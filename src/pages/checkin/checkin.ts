import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {

  user = { name:'', time:'' };
  datalist:any;
  url = "http://localhost/kruakroomeuk/loaddata.php";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
    let param = this.navParams.data;
    console.log(param);    
    this.http.get(this.url).subscribe(data => { 
      this.datalist = data});
  }

}
