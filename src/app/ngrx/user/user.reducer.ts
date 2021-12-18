import { createReducer, on } from '@ngrx/store';
import { Moralis } from 'moralis';
import { fetchUser, logout } from './user.actions';

export interface IUser {
  moralisUser?: Moralis.User;
  moralisError?: Error;
}

export const initialUser: IUser = {};

export const userReducer = createReducer(
  initialUser,
  on(fetchUser, (state, fetchResult) => ({ state, ...fetchResult })),
  on(logout, state => ({ state, moralisUser: undefined, moralisError: undefined }))
);
