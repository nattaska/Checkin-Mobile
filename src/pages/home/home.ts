import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { DatePipe } from '@angular/common';

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
//-- provider
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  userList:any;

  @ViewChild('phone') phone;

  constructor(public navCtrl: NavController, 
        public userProvider: UserProvider, 
        public alertCtrl: AlertController,
        public datePipe: DatePipe) {
  }

  goDetail(_item) {
    this.navCtrl.push(DetailPage,{item:_item});
  }

  ionViewWillEnter() {
    this.userProvider.getUser()
    .then((data:any) => {
      this.userList = data;
    })
  }

  checkInOut(key) {
    // console.log("Key : "+key+"  Phone : "+this.phone.value);
    
    var userPost = {code:0, name:"", phone:"", timin:"", timout:""};

    this.userList.forEach(user => {
      if ((user.phone==this.phone.value)) {
        userPost = user;
        return;
      }
    });

    console.log("User value "+JSON.stringify(userPost));

    if (userPost.name != "") {
      // console.log("Name value "+userPost.name);

      if ((userPost.timin == "-" && key=="create")
          || key == "update") {

        this.userProvider.checkInOut(key,userPost.code)
        .then(data => {
          // alert(JSON.stringify(data));
          // console.log(JSON.stringify(data));

          var doing = (key=="create"?"checked-in":"checked-out");

          let alert = this.alertCtrl.create({
            title: 'Hi! '+userPost.name,
            subTitle: "You're "+doing+" on "+ this.datePipe.transform(new Date(),'HH:mm'),
            buttons: ['OK']
          });
          alert.present();
          this.ionViewWillEnter();
        });
      } else {

        let alert = this.alertCtrl.create({
          title: 'Hi! '+userPost.name,
          subTitle: "You're checked-in already",
          buttons: ['OK']
        });
        alert.present();

      }
    } else {
      let alert = this.alertCtrl.create({
        title: '!! Incorrect !! ',
        subTitle: "Please enter phone number again. ",
        buttons: ['OK']
      });
      alert.present();
    }
  }
}