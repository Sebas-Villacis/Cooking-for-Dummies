import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaServiciosProvider } from '../../providers/receta-servicios/receta-servicios';
import { RecetasPage } from '../recetas/recetas';
import { LogroPage } from '../logro/logro';
import { MatchesServiciosProvider } from '../../providers/matches-servicios/matches-servicios';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public MatchesServiciosProvider:MatchesServiciosProvider) {
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
    getValue(){
      return this.recetas;
    }
    click()
    {
      this.navCtrl.push(LogroPage,{
        item:this.getValue(),item2:this.timer
      });
    }

    startTimer() {
      var intervalVar = setInterval(function(){
          this.timer++;
      }.bind(this),1000)
    }
    GuardarCompetencia() {
      let val = {
        "recid": this.recetas.recid,
        "mattiempo": this.timer,
        "matdescripcion": "Competencia Finalizada"
      }
      console.log(val);
      this.MatchesServiciosProvider.Store(val)
          .subscribe(
              (data)=> {
                this.recetas = data;
              },
              (error) => {
                console.log(error);
              }
          )
          this.click();
  
    }
  
}