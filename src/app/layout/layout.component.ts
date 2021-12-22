import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { IState } from '../ngrx/state';
import { logout } from '../ngrx/user/user.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Ships',
      icon: 'navigation-2',
      link: '/ships',
      pathMatch: 'full',
    },
    {
      title: 'Parts',
      icon: 'cube',
      link: '/parts',
      pathMatch: 'full',
    },
    {
      title: 'Expeditions',
      icon: 'star',
      link: '/expeditions',
      pathMatch: 'full',
    },
    {
      title: 'World Map',
      icon: 'compass',
      link: '/world-map',
      pathMatch: 'full',
    },
  ];

  constructor(private store: Store<IState>) {}

  logout() {
    this.store.dispatch(logout());
  }
}
