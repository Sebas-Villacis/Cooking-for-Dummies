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
import { CompletarRecetaPage } from '../pages/completar-receta/completar-receta';
import { LogroPage } from '../pages/logro/logro';
import { RecetaDettalePage } from '../pages/receta-dettale/receta-dettale';
import { ControlVozPage } from '../pages/control-voz/control-voz';
import { AuthProvider } from '../providers/auth/auth';
import { CrudProvider } from '../providers/crud/crud';
import { RegisterPage } from '../pages/register/register';

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
    IonicModule.forRoot(MyApp),
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
    ControlVozPage
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
