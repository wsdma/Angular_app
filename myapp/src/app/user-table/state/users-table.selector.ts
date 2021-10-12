import { UsersTableState } from './users-table.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const USERS_TABLE_STATE_NAME = 'users';

const getUsersTableState = createFeatureSelector<UsersTableState>(
  USERS_TABLE_STATE_NAME
);

export const getUsersTable = createSelector(getUsersTableState, (state) => {
  return state.users;
});
