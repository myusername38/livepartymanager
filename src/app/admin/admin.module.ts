import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';


@NgModule({
  declarations: [SpotifyTutorialComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
