import { AuthProvider } from './../../providers/auth/auth';
import { Component, NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RecetasPage } from '../recetas/recetas';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@NgModule()
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
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
      title: 'Warning',
      subTitle:message,
      buttons:['OK']
    });
    alert.present();
  }

  myLogIn(){
    if(this.email.trim()!==''){
      //console.log(this.email.trim() + " " + this.password.trim())
      if(this.password.trim()===''){
        this.errorFunc('Ingrese su Contraseña')
      }else{
        let credentials = {
          email: this.email,
          password: this.password
        };
        this.authService.login(credentials).then((result)=>{
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
