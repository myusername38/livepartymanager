import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';
import { AlertComponent } from './component/alert/alert.component';


@NgModule({
  declarations: [SpotifyTutorialComponent, AlertComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
