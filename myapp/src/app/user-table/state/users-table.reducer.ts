import { loadUsersSucces, sortUsers } from './users-table.action';
import { createReducer, on } from '@ngrx/store';
import { initialState } from 'src/app/user-table/state/users-table.state';

const _usersTableReducer = createReducer(
  initialState,
  on(loadUsersSucces, (state, action) => {
    return {
      ...state,
      users: action.users,
    };
  }),
  on(sortUsers, (state, action) => {
    return {
      ...state,
      users: state.users.sort((a: any, b: any) => {
        if (a[action.columnName] < b[action.columnName]) return -1;
        if (a[action.columnName] > b[action.columnName]) return 1;
        return 0;
      }),
    };
  })
);

export function usersTableReducer(state: any, action: any) {
  return _usersTableReducer(state, action);
}
