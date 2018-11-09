import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletarRecetaPage } from './completar-receta';

@NgModule({
  declarations: [
    CompletarRecetaPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletarRecetaPage),
  ],
})
export class CompletarRecetaPageModule {}
