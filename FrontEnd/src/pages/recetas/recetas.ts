import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RecetaServiciosProvider } from '../../providers/receta-servicios/receta-servicios';
@IonicPage()
@Component({
  selector: 'page-recetas',
  templateUrl: 'recetas.html',
})
export class RecetasPage {
  
  public isSearchbarOpened =false;
  recetas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public RecetaServiciosProvider:RecetaServiciosProvider) {
    this.RecetaServiciosProvider.getRecetas()
        .subscribe(
            (data)=> {
              this.recetas = data;
            },
            (error) => {
              console.log(error);
            }
        )
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecetasPage');
  }
  searchCategory(event){
    console.log(event);
    this.RecetaServiciosProvider.getRecetasByCategory(event)
        .subscribe(
            (data)=> {
              this.recetas = data;
            },
            (error) => {
              console.log(error);
            }
        )
    
  }
  
  searchNombre(event) {
    var val = event.target.value;
    console.log(val);
    this.RecetaServiciosProvider.getRecetasByName(val)
        .subscribe(
            (data)=> {
              this.recetas = data;
            },
            (error) => {
              console.log(error);
            }
        )
   
  }
 
}
