import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex4Component } from './ex4.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Ex4Component],
  exports: [Ex4Component]
})
export class ExploreEx4ComponentModule {}
