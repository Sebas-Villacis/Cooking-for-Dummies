import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {apiKey} from '../../app/apiurls/serverurls.js';
import {Http, Headers, RequestOptions} from '@angular/http';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  public token: any;
  constructor(public storage: Storage,public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

  createAccount(details){
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      headers.append('content-type','application/json');
      headers.append('Authorization', '5c73ee05d76c12ea0f209834a68a8a005b9ad8f626d9c7f1702938cfd526b04395a6983e1354d7eb');
      let options = new RequestOptions({ headers: headers });
      this.http.post(apiKey+'register',JSON.stringify(details),options)
      .subscribe(res =>{
        let data = res.json();
        this.token = data.token;
        resolve(data);
      },(err)=>{
        reject(err);
      });
    });
  }

  login(credentials){
    return new Promise((resolve,reject)=>{
      let headers = new Headers();
      //headers.append('Access-Control-Allow-Origin','*');
      //headers.append('Access-Control-Allow-Methods','POST, GET, OPTIONS, PUT');
      //headers.append('Accept','application/json');
      headers.append('content-type','application/json');
      headers.append('Authorization', '5c73ee05d76c12ea0f209834a68a8a005b9ad8f626d9c7f1702938cfd526b04395a6983e1354d7eb');
      let options = new RequestOptions({ headers: headers });
      this.http.post(apiKey+'login',JSON.stringify(credentials),options)
      .subscribe(res => {
        let data = res.json();
        this.token = data.token;
        this.storage.set('token',data.token);
        resolve(data);
      },(err)=>{
        reject(err);
      });
    });
  }

  checkAuthentication(){
    return new Promise((resolve,reject)=>{
      this.storage.get('token').then((value)=>{
        this.token = value;
        resolve(this.token)
      })
    });
  }

  logout(){
    this.storage.set('token','');
  }
}
