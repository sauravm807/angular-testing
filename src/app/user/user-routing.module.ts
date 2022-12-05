import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import { UsersRegisterComponent } from './users-register/users-register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: UsersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: UsersRegisterComponent
  },
  {
    path: 'login',
    component: UsersLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
