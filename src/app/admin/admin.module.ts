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


@NgModule({
  declarations: [SpotifyTutorialComponent, AlertComponent, PartySetupComponent],
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
