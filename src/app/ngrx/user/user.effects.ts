import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Moralis } from 'moralis';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { fromPromise } from '../../shared/utils/fromPromise';
import { toastrDanger } from '../toastr/toastr.actions';
import { login, fetchUser, logout } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  fetchUser = createEffect(() =>
    this.actions.pipe(
      ofType(login),
      mergeMap(args => {
        return fromPromise(Moralis.Web3.authenticate(args.opt)).pipe(
          map(moralisUser => ({ type: fetchUser.type, moralisUser })),
          catchError(err => of({ type: toastrDanger.type, args: { message: err.message } }))
        );
      })
    )
  );
  logoutUser = createEffect(() =>
    this.actions.pipe(
      ofType(logout),
      mergeMap(() => {
        return fromPromise(Moralis.User.logOut()).pipe(
          mergeMap(() => {
            Moralis.Web3.cleanup();
            return EMPTY;
          }),
          catchError(err => of({ type: toastrDanger.type, args: { message: err.message } }))
        );
      })
    )
  );

  constructor(private actions: Actions) {}
}
