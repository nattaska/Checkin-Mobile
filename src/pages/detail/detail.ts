import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//-- provider
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  contact = { name:'', phone:'' };
  user = {code:-1, name:'',phone:'',timin:'',timout:''};
  month_name:string;
  userList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    let data = this.navParams.data;
    this.user = data.user;
    this.month_name = data.mon_name;    

    console.log("user ===> "+JSON.stringify(this.user));
    console.log("user code ===> "+this.user.code);
    console.log("data ===> "+data);
    console.log("data ===> "+data.month);
    // this.contact=data;

    this.userProvider.getUserTimesheet(this.user.code, data.month)
    .then((data:any) => {
      this.userList = data;
    })
  }

}
