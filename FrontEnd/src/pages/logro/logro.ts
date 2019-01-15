import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { CompletarRecetaPage } from '../completar-receta/completar-receta';
import { LogroServiciosProvider } from '../../providers/logro-servicios/logro-servicios';

@IonicPage()
@Component({
  selector: 'page-logro',
  templateUrl: 'logro.html',
})
export class LogroPage {
  recetas : any;
  tiempo: any;
  public puntaje = 0;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController,public navParams: NavParams, public LogroServiciosProvider:LogroServiciosProvider) {
    this.recetas=navParams.get('item');
    this.tiempo=navParams.get('item2');
    this.puntaje = (this.tiempo/(this.recetas.rectiempo))*600 

  }

  presentToastPuntosGanados() {
    let toast = this.toastCtrl.create({
      message: 'Has ganado 10 puntos!',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentToastPuntosPerdidos() {
    let toast = this.toastCtrl.create({
      message: 'Has perdido 10 puntos!',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogroPage');
  }
  GuardarLogro() {
    let val = {
      "scovalor": this.puntaje,
      "scocompetencia": "Competencia Finalizada"
    }
    console.log(val);
    this.LogroServiciosProvider.Store(val)
        .subscribe(
            (data)=> {
            },
            (error) => {
              console.log(error);
            }
        )
  }

  goBack(){
    this.GuardarLogro();
    this.navCtrl.setRoot(CompletarRecetaPage);
    }

}
