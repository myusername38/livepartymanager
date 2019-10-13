import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';
import { AlertComponent } from './component/alert/alert.component';
import { PartySetupComponent } from './component/party-setup/party-setup.component';
import { MakeItemComponent } from './component/make-item/make-item.component';



const routes: Routes = [
  {  path: 'spotifyhelp', component: SpotifyTutorialComponent },
  { path: 'alerts', component: AlertComponent },
  { path: 'add', component: MakeItemComponent },
  { path: '', component: PartySetupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
