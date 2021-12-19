import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Moralis } from 'moralis';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { fromPromise } from '../../shared/utils/fromPromise';
import { login, fetchUser } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  fetchUser = createEffect(() =>
    this.actions.pipe(
      ofType(login),
      mergeMap(args => {
        return fromPromise(Moralis.Web3.authenticate(args.opt)).pipe(
          map(moralisUser => ({ type: fetchUser.name, payload: { moralisUser } })),
          catchError(moralisError => of({ type: fetchUser.name, payload: { moralisError } }))
        );
      })
    )
  );

  constructor(private actions: Actions) {}
}
