import { AuthProvider } from './../../providers/auth/auth';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RecetasPage } from '../recetas/recetas';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name:string='';
  email:string='';
  password:string='';
  errormsg:string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService:AuthProvider,
              public loadingCtrl:LoadingController,
              public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  errorFunc(message){
    let alert=this.alertCtrl.create({
      title: 'Error!',
      subTitle:message,
      buttons:['OK']
    });
    alert.present();
  }

  mySignIn(){
    if(this.email.trim()!==''){
      //console.log(this.email.trim() + " " + this.password.trim())
      if(this.password.trim()===''){
        this.errorFunc('Ingrese su Contraseña')
      }else{
        let credentials = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        this.authService.createAccount(credentials).then((result)=>{
          console.log(result);
          this.navCtrl.setRoot(RecetasPage);
        },(err)=>{
          console.log(err);
          this.errorFunc('Credenciales no Validas')
          //console.log("Credenciales: "+JSON.stringify(credentials))
        });
      }
    }else{
      this.errorFunc('Ingrese una Contraseña valida')
    }
    console.log(console.log(this.email.trim() + " " + this.password.trim()))
  }
}
