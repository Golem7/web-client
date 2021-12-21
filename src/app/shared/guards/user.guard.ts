import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of, switchMap } from 'rxjs';
import { IUser } from '../../ngrx/user/user.reducer';
import { fromPromise } from '../utils/fromPromise';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate, CanActivateChild {
  constructor(private store: Store<{ user: IUser }>, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select('user').pipe(
      map(user => !!user?.moralisUser),
      switchMap(isLogedIn => {
        if (isLogedIn) {
          return of(isLogedIn);
        }
        return fromPromise(this.router.navigate(['/login'])).pipe(map(() => isLogedIn));
      })
    );
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
