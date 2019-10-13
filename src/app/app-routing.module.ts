import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersHomeComponent } from './components/users-home/users-home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'party', component: UsersHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

