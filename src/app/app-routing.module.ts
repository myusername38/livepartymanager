import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersHomeComponent } from './components/users-home/users-home.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'party', component: UsersHomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'planners', loadChildren: () => import ('./admin/admin.module').then(mod => mod.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

