import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotifyTutorialComponent } from './component/spotify-tutorial/spotify-tutorial.component';


const routes: Routes = [
  {  path: '', component: SpotifyTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
