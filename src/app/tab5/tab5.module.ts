import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExploreEx3ComponentModule } from '../ex3/ex3.module';
import { Tab5PageRoutingModule } from './tab5-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule,
    ExploreEx3ComponentModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
