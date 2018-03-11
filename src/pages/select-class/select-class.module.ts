import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectClassPage } from './select-class';

@NgModule({
  declarations: [
    SelectClassPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectClassPage),
  ],
})
export class SelectClassPageModule {}
