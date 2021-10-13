import { UsersTableState } from './users-table.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const USERS_TABLE_STATE_NAME = 'users';
export const USERS_TABLE_FETCHED_DATA_NAME = 'usersFetchedData';

const getUsersTableState = createFeatureSelector<UsersTableState>(
  USERS_TABLE_STATE_NAME
);

const getUsersTableFetchedDataState = createFeatureSelector<UsersTableState>(
  USERS_TABLE_FETCHED_DATA_NAME
);

export const getUsers = createSelector(
  getUsersTableState,
  (state) => state.users
);

export const getUsersFetchedData = createSelector(
  getUsersTableFetchedDataState,
  (state) => state.usersFetchedData
);
