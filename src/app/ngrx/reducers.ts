import { userReducer } from './user/user.reducer';
import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['user'], rehydrate: true })(reducer);
}

export const reducers = { user: userReducer };
export const metaReducers = [localStorageSyncReducer];
