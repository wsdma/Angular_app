import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setOriginUsersList } from '../user-table/state/users-table.action';
import { UsersTableState } from '../user-table/state/users-table.state';
import { searchInUsersTable } from '../user-table/state/users-table.action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  searchSubscription: Subscription = new Subscription();
  searchControl: FormGroup;
  constructor(private store: Store<UsersTableState>) {
    this.searchControl = new FormGroup({
      search: new FormControl(),
      radioInput: new FormControl('name'),
    });
  }

  searchInUsersTable(searchData: string, searchColoumn: string): void {
    if (!searchData) {
      this.store.dispatch(setOriginUsersList());
      return;
    }
    this.store.dispatch(setOriginUsersList());
    this.store.dispatch(searchInUsersTable({ searchData, searchColoumn }));
  }

  ngOnInit(): void {
    this.searchSubscription.add(
      this.searchControl.valueChanges.subscribe((value) => {
        this.searchInUsersTable(value.search, value.radioInput);
      })
    );
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }
}
