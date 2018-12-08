import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PantallaInicioPage } from '../pages/pantalla-inicio/pantalla-inicio';
import  {RecetasPage} from '../pages/recetas/recetas';
import { CompetenciaPageModule } from '../pages/competencia/competencia.module';
import { CompetenciaPage } from '../pages/competencia/competencia';
import { RecetaServiciosProvider } from '../providers/receta-servicios/receta-servicios';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { CompletarRecetaPage } from '../pages/completar-receta/completar-receta';
import { LogroPage } from '../pages/logro/logro';
import { RecetaDettalePage } from '../pages/receta-dettale/receta-dettale';

import { OAuthModule } from 'angular-oauth2-oidc';
import { ControlVozPage } from '../pages/control-voz/control-voz';
//import { LoginPageModule } from '../pages/login/login.module';

export const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "your-domain-name.firebaseapp.com",
  databaseURL: "https://your-domain-name.firebaseio.com",
  storageBucket: "your-domain-name.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PantallaInicioPage,
    RecetasPage,
    CompetenciaPage,
    CompletarRecetaPage,
    LogroPage,
    RecetaDettalePage,
    ControlVozPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    //LoginPageModule,
    OAuthModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PantallaInicioPage,
    RecetasPage,
    CompetenciaPage,
    CompletarRecetaPage,
    LogroPage,
    RecetaDettalePage,
    ControlVozPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecetaServiciosProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
