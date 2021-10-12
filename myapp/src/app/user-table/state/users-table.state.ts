import { User } from 'src/app/models/user-table.model';

export interface UsersTableState {
  users: User[];
}

export const initialState: UsersTableState = {
  users: [],
};
