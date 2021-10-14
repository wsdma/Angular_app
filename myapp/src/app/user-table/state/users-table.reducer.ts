import {
  loadUsersSucces,
  sortUsersBy,
  setOriginUsersList,
} from './users-table.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/user-table/state/users-table.state';
import { searchInUsersTable } from './users-table.action';

const _usersTableReducer = createReducer(
  initialState,
  on(loadUsersSucces, (state, action) => {
    return {
      ...state,
      usersFetchedData: action.users,
      users: action.users,
    };
  }),
  on(sortUsersBy, (state, action) => {
    return {
      ...state,
      users: [...state.users].sort((a: any, b: any) => {
        if (a[action.columnName] < b[action.columnName]) return -1;
        if (a[action.columnName] > b[action.columnName]) return 1;
        return 0;
      }),
    };
  }),
  on(searchInUsersTable, (state, action) => {
    return {
      ...state,
      users: [...state.usersFetchedData].filter((user: any) => {
        return user[action.searchColoumn]
          .toLowerCase()
          .includes(action.searchData);
      }),
    };
  }),
  on(setOriginUsersList, (state) => {
    return {
      ...state,
      users: state.usersFetchedData,
    };
  })
);

export function usersTableReducer(state: any, action: any) {
  return _usersTableReducer(state, action);
}
