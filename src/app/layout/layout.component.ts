import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../ngrx/state';
import { logout } from '../ngrx/user/user.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private store: Store<IState>) {}

  logout() {
    this.store.dispatch(logout());
  }
}
