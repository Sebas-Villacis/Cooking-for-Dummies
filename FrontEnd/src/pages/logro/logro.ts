import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { CompletarRecetaPage } from '../completar-receta/completar-receta';


@IonicPage()
@Component({
  selector: 'page-logro',
  templateUrl: 'logro.html',
})
export class LogroPage {

  constructor(private toastCtrl: ToastController, public navCtrl: NavController) {}

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

  goBack(){
    this.navCtrl.setRoot(CompletarRecetaPage);
    }

}
