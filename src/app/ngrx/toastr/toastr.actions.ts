import { NbToastrConfig } from '@nebular/theme';
import { createAction, props } from '@ngrx/store';

export interface IToastrArgs {
  message: string | number;
  title?: string | number;
  config?: Partial<NbToastrConfig>;
}

export const toastrShow = createAction('Toastr show', props<{ payload: IToastrArgs }>());
export const toastrInfo = createAction('Toastr info', props<{ payload: IToastrArgs }>());
export const toastrWarning = createAction('Toastr warning', props<{ payload: IToastrArgs }>());
export const toastrPrimary = createAction('Toastr primary', props<{ payload: IToastrArgs }>());
export const toastrDanger = createAction('Toastr danger', props<{ payload: IToastrArgs }>());
