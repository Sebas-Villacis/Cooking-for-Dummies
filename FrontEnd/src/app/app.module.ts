import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PantallaInicioPage } from '../pages/pantalla-inicio/pantalla-inicio';
import  {RecetasPage} from '../pages/recetas/recetas';
import { CompetenciaPage } from '../pages/competencia/competencia';
import { CompletarRecetaPage } from '../pages/completar-receta/completar-receta';
import { LogroPage } from '../pages/logro/logro';
import { RecetaDettalePage } from '../pages/receta-dettale/receta-dettale';
import { ControlVozPage } from '../pages/control-voz/control-voz';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecetaServiciosProvider } from '../providers/receta-servicios/receta-servicios';
import { AuthProvider } from '../providers/auth/auth';
import { CrudProvider } from '../providers/crud/crud';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from './../pages/login/login';

import { CompetenciaPageModule } from '../pages/competencia/competencia.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PantallaInicioPage,
    RecetasPage,
    CompetenciaPage,
    CompletarRecetaPage,
    LogroPage,
    RecetaDettalePage,
    ControlVozPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PantallaInicioPage,
    RecetasPage,
    CompetenciaPage,
    CompletarRecetaPage,
    LogroPage,
    RecetaDettalePage,
    ControlVozPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecetaServiciosProvider,
    AuthProvider,
    CrudProvider
  ]
})
export class AppModule {}