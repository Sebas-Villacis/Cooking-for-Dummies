import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuarios: any;
  user
  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginServiceProvider:LoginServiceProvider) {
    this.LoginServiceProvider.login()
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
    console.log('ionViewDidLoad LoginPage');
  }

}
