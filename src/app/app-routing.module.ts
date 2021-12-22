import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './shared/guards/user.guard';
import { ShipsComponent } from './ships/ships.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
    children: [
      {
        path: '',
        redirectTo: 'ships',
        pathMatch: 'prefix',
      },
      {
        path: 'ships',
        component: ShipsComponent,
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
