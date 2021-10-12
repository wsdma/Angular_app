import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user-table.model';

export const LOAD_USERS = '[users-table] load users';
export const LOAD_USERS_SUCCES = '[users-table] load users success';
export const SORT_USERS = '[user-table] sort users';

export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSucces = createAction(
  LOAD_USERS_SUCCES,
  props<{ users: User[] }>()
);
export const sortUsersBy = createAction(
  SORT_USERS,
  props<{ columnName: string }>()
);
export const SEARCH_DATA = '[search-form] search data';

export const searchInUsersTable = createAction(
  SEARCH_DATA,
  props<{ searchData: string; searchColoumn: string }>()
);
