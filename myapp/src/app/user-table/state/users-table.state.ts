import { User } from 'src/app/models/user.model';

export interface UsersTableState {
  usersFetchedData: User[];
  users: User[];
}

export const initialState: UsersTableState = {
  usersFetchedData: [],
  users: [],
};
