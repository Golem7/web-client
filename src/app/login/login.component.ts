import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import Moralis from 'moralis/types';
import { map, Observable } from 'rxjs';
import { IState } from '../ngrx/state';
import { login, logout } from '../ngrx/user/user.actions';

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  public userOb: Observable<Moralis.User | undefined> = this.store.select('user').pipe(map(user => user.moralisUser));

  constructor(private store: Store<IState>) {}

  public login(provider: Moralis.Web3ProviderType = 'metamask'): void {
    this.store.dispatch(login({ payload: { provider } }));
  }
}
