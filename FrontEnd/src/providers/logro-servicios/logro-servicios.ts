import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
/*
  Generated class for the LogroServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogroServiciosProvider {
  basepath="/api";
  constructor(public http: HttpClient,private _platform:Platform) {
    if (this._platform.is("cordova")){
      this.basepath = "http://127.0.0.1:8000/api"
    }
  }
  Store(datos){
    return this.http.post(this.basepath.concat('/Logro/'),datos,);
  }
}