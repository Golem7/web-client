import { createAction, props } from '@ngrx/store';
import Moralis from 'moralis/types';

export const login = createAction('User login', props<{ payload?: Moralis.AuthenticationOptions }>());
export const fetchUser = createAction('User fetch', props<{ payload?: Moralis.User }>());
export const logout = createAction('User logout');
