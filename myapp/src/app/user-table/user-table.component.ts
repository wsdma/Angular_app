import { UsersTableState } from './state/users-table.state';
import { User } from 'src/app/models/user-table.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUsers, sortUsersBy } from './state/users-table.action';
import { getUsersTable } from './state/users-table.selector';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users: Observable<User[]>;

  constructor(private store: Store<UsersTableState>) {
    this.users = this.store.select(getUsersTable);
  }

  sortDataBy(columnName: string) {
    this.store.dispatch(sortUsersBy({ columnName }));
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }
}
