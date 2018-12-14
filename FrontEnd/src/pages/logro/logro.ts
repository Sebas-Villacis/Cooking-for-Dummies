import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';

/**
 * Generated class for the LogroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logro',
  templateUrl: 'logro.html',
})
export class LogroPage {

  /*constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/

  constructor(private toastCtrl: ToastController) {

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

}
