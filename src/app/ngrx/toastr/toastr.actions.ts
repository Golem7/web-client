import { NbToastrConfig } from '@nebular/theme';
import { createAction, props } from '@ngrx/store';

export interface IToastrArgs {
  message: string | number;
  title?: string | number;
  config?: Partial<NbToastrConfig>;
}

export const toastrShow = createAction('Toastr show', props<{ args: IToastrArgs }>());
export const toastrInfo = createAction('Toastr info', props<{ args: IToastrArgs }>());
export const toastrWarning = createAction('Toastr warning', props<{ args: IToastrArgs }>());
export const toastrPrimary = createAction('Toastr primary', props<{ args: IToastrArgs }>());
export const toastrDanger = createAction('Toastr danger', props<{ args: IToastrArgs }>());
