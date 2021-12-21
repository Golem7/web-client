import { Injectable } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { toastrDanger, toastrInfo, toastrPrimary, toastrShow, toastrWarning } from './toastr.actions';

@Injectable({
  providedIn: 'root',
})
export class ToastEffects {
  showEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrShow),
        tap(({ payload }) => this.nbToastrService.show(payload.message, payload.title, payload.config))
      ),
    { dispatch: false }
  );
  infoEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrInfo),
        tap(({ payload }) => this.nbToastrService.info(payload.message, payload.title, payload.config))
      ),
    { dispatch: false }
  );
  warningEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrWarning),
        tap(({ payload }) => this.nbToastrService.warning(payload.message, payload.title, payload.config))
      ),
    { dispatch: false }
  );
  primaryEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrPrimary),
        tap(({ payload }) => this.nbToastrService.primary(payload.message, payload.title, payload.config))
      ),
    { dispatch: false }
  );
  dangerEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrDanger),
        tap(({ payload }) => this.nbToastrService.danger(payload.message, payload.title, payload.config))
      ),
    { dispatch: false }
  );

  constructor(private actions: Actions, private nbToastrService: NbToastrService) {}
}
