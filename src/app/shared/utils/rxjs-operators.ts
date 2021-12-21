import { Action } from '@ngrx/store';
import { catchError, ObservableInput, of } from 'rxjs';
import { toastrDanger } from '../../ngrx/toastr/toastr.actions';

export const catchAsToastrDanger = catchError<any, ObservableInput<Action>>(err =>
  of(toastrDanger({ payload: { message: err.message } }))
);
