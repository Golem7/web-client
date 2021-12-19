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
        tap(({ args }) => this.nbToastrService.show(args.message, args.title, args.config))
      ),
    { dispatch: false }
  );
  infoEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrInfo),
        tap(({ args }) => this.nbToastrService.info(args.message, args.title, args.config))
      ),
    { dispatch: false }
  );
  warningEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrWarning),
        tap(({ args }) => this.nbToastrService.warning(args.message, args.title, args.config))
      ),
    { dispatch: false }
  );
  primaryEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrPrimary),
        tap(({ args }) => this.nbToastrService.primary(args.message, args.title, args.config))
      ),
    { dispatch: false }
  );
  dangerEffect = createEffect(
    () =>
      this.actions.pipe(
        ofType(toastrDanger),
        tap(({ args }) => this.nbToastrService.danger(args.message, args.title, args.config))
      ),
    { dispatch: false }
  );

  constructor(private actions: Actions, private nbToastrService: NbToastrService) {}
}
