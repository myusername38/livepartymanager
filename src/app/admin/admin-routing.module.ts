import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';
import { AlertComponent } from './component/alert/alert.component';


const routes: Routes = [
  {  path: '', component: SpotifyTutorialComponent },
  { path: 'alerts', component: AlertComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
