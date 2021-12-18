import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Moralis } from 'moralis';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { login, fetchUser } from './user.actions';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  fetchUser = createEffect(() =>
    this.actions.pipe(
      ofType(login),
      mergeMap(args => {
        return from(Moralis.Web3.authenticate(args.opt)).pipe(
          map(moralisUser => ({ type: fetchUser.name, payload: { moralisUser } })),
          catchError(moralisError => of({ type: fetchUser.name, payload: { moralisError } }))
        );
      })
    )
  );

  constructor(private actions: Actions) {}
}
