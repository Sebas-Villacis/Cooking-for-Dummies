import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the RecetaServiciosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecetaServiciosProvider {
  basepath="/api";
  constructor(public http: HttpClient,private _platform:Platform) {
    if (this._platform.is("cordova")){
      this.basepath = "http://192.168.1.4:8100/api"
    }
  }
  getRecetas(){
    return this.http.get(this.basepath.concat('/RecetasImagenes'));
  }

  getRecetasByCategory(buscar){
    
    return this.http.get(this.basepath.concat('/RecetasByCategoria/'+buscar));
  }
  getRecetasByName(buscar){
    
    return this.http.get(this.basepath.concat('/RecetasByNombre/'+buscar));
  }

}
