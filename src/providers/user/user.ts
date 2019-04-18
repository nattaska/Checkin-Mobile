import { Http, Headers, RequestOptions } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  // url:string = "https://jsonplaceholder.typicode.com";
  // baseURI:string = "http://localhost/kruakroomeuk/loaddata.php";
  // baseURI:string = "http://192.168.1.34/kruakroomeuk";
  baseURI:string = "http://kruakroomeuk/kruakroomeuk";

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }

  getUser() {
    return new Promise((resolve, reject)=>{
      this.http.get(this.baseURI+"/loaddata.php")
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
      },error => {
        reject(error);
      })
    });
  }

  getUserTimesheet(empcode:number, month:string) {
    return new Promise((resolve, reject)=>{
      this.http.get(this.baseURI+"/loaddata.php?empcd="+empcode+"&month="+month)
      .map(res=>res.json())
      .subscribe(data => {
        resolve(data);
      },error => {
        reject(error);
      })
    });
  }

  checkInOut(inout:string, empcode:number) {
    console.log('User code '+empcode+' '+inout);

    return new Promise((resolve,reject)=>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers : headers });
      let body = { key:inout, code:empcode };
      let url = this.baseURI + "/managedata.php";

      // console.log("URL = "+url);
      // console.log("body = "+JSON.stringify(body));
      // console.log("options = "+JSON.stringify(options));
      this.http.post(url, body, options)
      .subscribe((data : any) => {
        console.log('Success');
        resolve(data);
      }, (error : any) => {
        console.log('Error');
        reject(error);
      })
    })
  }
}
