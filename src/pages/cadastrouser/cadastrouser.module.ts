import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrouserPage } from './cadastrouser';

@NgModule({
  declarations: [
    CadastrouserPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrouserPage),
  ],
})
export class CadastrouserPageModule {}
