import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';
import { AlertComponent } from './component/alert/alert.component';
import { PartySetupComponent } from './component/party-setup/party-setup.component';



const routes: Routes = [
  {  path: 'spotifyhelp', component: SpotifyTutorialComponent },
  { path: 'alerts', component: AlertComponent },
  { path: '', component: PartySetupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
