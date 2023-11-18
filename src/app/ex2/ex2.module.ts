import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex2Component } from './ex2.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Ex2Component],
  exports: [Ex2Component]
})
export class ExploreEx2ComponentModule {}
