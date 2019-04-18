import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
//-- provider
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  userList:any;
  selected_month: any;
  selected_year: any;

  years: number[] = [2014,2015,2016,2017,2018];
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');    
    var dt=new Date();
    console.log(dt.getMonth()+":"+dt.getFullYear());

    this.selected_month=this.months[dt.getMonth()];
    this.selected_year=dt.getFullYear();
    
    for (let i = 0; i < 5; i++) {
      // this.years.push(this.selected_year - i);
      this.years[i] = this.selected_year - i;
    }

    this.userProvider.getUser()
    .then((data:any) => {
      this.userList = data;
    })
  }

  goDetail(_user) {
    console.log('goDetail ListPage');   
    let n_mon:number = this.months.indexOf(this.selected_month)+1;
    let _month:string = this.selected_year+(n_mon < 10?"0"+n_mon:n_mon+"");
    console.log(_user.code+"  "+_month);
    // let param:any = {{user:_user.code}, {month:_month}};
    this.navCtrl.push(DetailPage,{user:_user, month:_month, mon_name:this.selected_month+", "+this.selected_year});
    // console.log(_user.code);
    
  }

}
