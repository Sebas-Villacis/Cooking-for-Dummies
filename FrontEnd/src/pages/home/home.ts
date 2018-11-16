import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CompletarRecetaPage } from '../completar-receta/completar-receta';
import { RecetasPage } from '../recetas/recetas';


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
  YourFancyButton(){
    this.navCtrl.setRoot(RecetasPage);
    }

  slides = [
    {
      title: "assets/imgs/1.1.jpeg",
      image: "assets/imgs/1.jpeg",
    },
    {
      title: "assets/imgs/2.2.jpeg",
      image: "assets/imgs/2.jpeg",
    }
  ];
}
