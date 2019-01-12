import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaServiciosProvider } from '../../providers/receta-servicios/receta-servicios';
import { RecetasPage } from '../recetas/recetas';

/**
 * Generated class for the CompetenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competencia',
  templateUrl: 'competencia.html',
})
export class CompetenciaPage {
  recetas: any;
  public timer = 0;  
  constructor(public navCtrl: NavController, public navParams: NavParams,public RecetaServiciosProvider:RecetaServiciosProvider) {
    //this.searchNombre('lasagna');
    this.recetas=navParams.get('item');
    this.startTimer();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompetenciaPage');
  }
  YourFancyButton(){
    this.navCtrl.setRoot(RecetasPage);
    }

    startTimer() {
      var intervalVar = setInterval(function(){
          this.timer++;
      }.bind(this),1000)
    }
}