import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex3Component } from './ex3.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Ex3Component],
  exports: [Ex3Component]
})
export class ExploreEx3ComponentModule {}
