import { createAction, props } from '@ngrx/store';
import Moralis from 'moralis/types';

export const login = createAction('User login', props<{ opt?: Moralis.AuthenticationOptions }>());
export const fetchUser = createAction('User fetch', props<{ moralisUser?: Moralis.User; moralisError?: Error }>());
export const logout = createAction('User logout');
