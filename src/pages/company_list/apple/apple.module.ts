import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApplePage } from './apple';

@NgModule({
  declarations: [
    ApplePage,
  ],
  imports: [
    IonicPageModule.forChild(ApplePage),
  ],
})
export class ApplePageModule {}
