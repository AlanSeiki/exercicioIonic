import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex1Component } from './ex1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Ex1Component],
  exports: [Ex1Component]
})
export class ExploreEx1ComponentModule {}
