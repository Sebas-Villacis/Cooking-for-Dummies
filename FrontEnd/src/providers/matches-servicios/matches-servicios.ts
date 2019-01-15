
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {apiKey} from '../../app/apiurls/serverurls.js';
/*
  Generated class for the MatchesServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MatchesServiciosProvider {
  basepath="/api";
  constructor(public http: HttpClient,private _platform:Platform) {
    if (this._platform.is("cordova")){
<<<<<<< HEAD
      this.basepath = apiKey;
=======
      this.basepath = "http://127.0.0.1:8000/api"
>>>>>>> 4ada3b1d5cfd6d4cb0fb30eef957910f572cf686
    }
  }
  Store(datos){
    return this.http.post(this.basepath.concat('/Competencia/'),datos,);
  }



}
