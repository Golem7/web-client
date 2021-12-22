import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { Moralis } from 'moralis';
import { EMPTY } from 'rxjs';
import { map, mergeMap, filter, withLatestFrom, tap } from 'rxjs/operators';
import { fromPromise } from '../../shared/utils/fromPromise';
import { catchAsToastrDanger } from '../../shared/utils/rxjs-operators';
import { IState } from '../state';
import { login, fetchUser, logout } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  fetchUser = createEffect(() =>
    this.actions.pipe(
      ofType(login),
      mergeMap(args => {
        return fromPromise(Moralis.Web3.authenticate(args.payload)).pipe(
          map(moralisUser => fetchUser({ payload: moralisUser })),
          catchAsToastrDanger
        );
      }),
      tap(() => this.router.navigate(['']))
    )
  );
  navigateToMainPage = createEffect(() =>
    this.actions.pipe(
      ofType(routerNavigatedAction),
      withLatestFrom(this.store.select('user')),
      filter(([r, user]) => r.payload.routerState.url.includes('login') && !!user.moralisUser),
      mergeMap(() => {
        return fromPromise(this.router.navigate([''])).pipe(mergeMap(() => EMPTY));
      }),
      catchAsToastrDanger
    )
  );
  logoutUser = createEffect(() =>
    this.actions.pipe(
      ofType(logout),
      mergeMap(() => {
        return fromPromise(Moralis.User.logOut()).pipe(
          mergeMap(() => {
            Moralis.Web3.cleanup();
            this.router.navigate(['/login']);
            return EMPTY;
          }),
          catchAsToastrDanger
        );
      })
    )
  );

  constructor(private actions: Actions, private store: Store<IState>, private router: Router) {}
}
