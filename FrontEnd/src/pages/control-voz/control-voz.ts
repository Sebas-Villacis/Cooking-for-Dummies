import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetasPage } from '../recetas/recetas';
import { CompetenciaPage } from '../competencia/competencia';

/**
 * Generated class for the ControlVozPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-control-voz',
  templateUrl: 'control-voz.html',
})
export class ControlVozPage {
  recetas : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recetas=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlVozPage');
  }
  getValue(){
    return this.recetas;
  }
  click(event)
  {
    this.navCtrl.push(CompetenciaPage,{
      item:this.getValue()
    });
  }
}
