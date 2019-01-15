import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RecetasPage } from '../recetas/recetas';
/**
 * Generated class for the CompletarRecetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completar-receta',
  templateUrl: 'completar-receta.html',
})

export class CompletarRecetaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletarRecetaPage');
  }
  goBack() {
    this.navCtrl.setRoot(RecetasPage);
    }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Buen trabajo!',
      subTitle: '!Has completado un delicioso platillo!',
      buttons: ['Siguiente']
    });
    alert.present();
    this.goBack();
  }
}
