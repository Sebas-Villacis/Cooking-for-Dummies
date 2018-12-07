import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ControlVozPage } from '../control-voz/control-voz';


/**
 * Generated class for the RecetaDettalePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receta-dettale',
  templateUrl: 'receta-dettale.html',
})
export class RecetaDettalePage {
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value=navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecetaDettalePage');
  }

  getValue(){
    return this.value;
  }
  click(event)
  {
    this.navCtrl.push(ControlVozPage,{
      item:this.getValue()
    });
  }

}
