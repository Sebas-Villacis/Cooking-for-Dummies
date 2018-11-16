import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CompletarRecetaPage } from '../completar-receta/completar-receta';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goCompletarReceta():void{
    this.navCtrl.push(CompletarRecetaPage);
  }
  
}
