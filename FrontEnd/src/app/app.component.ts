import { LoginPage } from '../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PantallaInicioPage } from '../pages/pantalla-inicio/pantalla-inicio';
import  {RecetasPage} from '../pages/recetas/recetas';
import { CompetenciaPage } from '../pages/competencia/competencia';
import { CompletarRecetaPage } from '../pages/completar-receta/completar-receta';
import { LogroPage } from '../pages/logro/logro';
import { ControlVozPage } from '../pages/control-voz/control-voz';
import { RegisterPage } from '../pages/register/register';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage },
      { title: 'Inicio', component: PantallaInicioPage },
      { title: 'Recetas', component: RecetasPage },
      { title: 'Competencia', component:CompetenciaPage },
      { title: 'Receta Completa', component:CompletarRecetaPage },
      { title: 'Logro', component:LogroPage },
      { title: 'ControlVoz', component:ControlVozPage },
      { title: 'Registro', component:RegisterPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
