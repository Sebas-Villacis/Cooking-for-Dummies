import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecetaDettalePage } from './receta-dettale';

@NgModule({
  declarations: [
    RecetaDettalePage,
  ],
  imports: [
    IonicPageModule.forChild(RecetaDettalePage),
  ],
})
export class RecetaDettalePageModule {}
