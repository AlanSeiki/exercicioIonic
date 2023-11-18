import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ex5Component } from './ex5.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Ex5Component],
  exports: [Ex5Component]
})
export class ExploreEx5ComponentModule {}
