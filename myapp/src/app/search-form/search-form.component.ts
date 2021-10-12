import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user-table.model';
import { getUsersTable } from '../user-table/state/users-table.selector';
import { UsersTableState } from '../user-table/state/users-table.state';
import { searchInUsersTable } from '../user-table/state/users-table.action';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  users: Observable<User[]>;
  usersOrigData: Observable<User[]>;
  searchControl: FormGroup;
  constructor(private store: Store<UsersTableState>) {
    this.users = this.store.select(getUsersTable);
    this.usersOrigData = this.users;
    this.searchControl = new FormGroup({
      search: new FormControl(),
      radioInput: new FormControl('name'),
    });
  }

  searchInUsersTable(searchData: string, searchColoumn: string) {
    if (!searchData) {
      return;
    }
    this.store.dispatch(searchInUsersTable({ searchData, searchColoumn }));
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      this.searchInUsersTable(value.search, value.radioInput);
    });
  }
}
