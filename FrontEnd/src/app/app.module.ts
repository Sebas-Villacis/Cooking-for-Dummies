import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PantallaInicioPage } from '../pages/pantalla-inicio/pantalla-inicio';
import  {RecetasPage} from '../pages/recetas/recetas';
import { CompetenciaPageModule } from '../pages/competencia/competencia.module';
import { CompetenciaPage } from '../pages/competencia/competencia';
import { RecetaServiciosProvider } from '../providers/receta-servicios/receta-servicios';
<<<<<<< HEAD
import { LoginServiceProvider } from '../providers/login-service/login-service';
=======
import { CompletarRecetaPage } from '../pages/completar-receta/completar-receta';
import { LogroPage } from '../pages/logro/logro';

>>>>>>> 88c7a7f2703ae949a64bcabec6b51774d9341a5f
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
    LogroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    LogroPage
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
