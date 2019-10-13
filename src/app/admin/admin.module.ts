import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';
import { AlertComponent } from './component/alert/alert.component';
import { PartySetupComponent } from './component/party-setup/party-setup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatSnackBarModule,
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
 } from '@angular/material';
import { MakeItemComponent } from './component/make-item/make-item.component';


@NgModule({
  declarations: [SpotifyTutorialComponent, AlertComponent, PartySetupComponent, MakeItemComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    AdminRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
