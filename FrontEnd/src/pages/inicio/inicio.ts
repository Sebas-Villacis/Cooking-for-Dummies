import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetasPage } from '../recetas/recetas';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
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
