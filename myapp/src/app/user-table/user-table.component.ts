import { UsersTableState } from './state/users-table.state';
import { User } from 'src/app/models/user-table.model';
import { UsersService } from './../services/user-table.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadUsers, sortUsers } from './state/users-table.action';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  users$: Observable<User[]>;
  searchControl: FormGroup;

  constructor(
    private store: Store<UsersTableState>,
    private _dataService: UsersService
  ) {
    this.users$ = this.store.select((state) => state.users);
    this.searchControl = new FormGroup({
      search: new FormControl(),
      radioInput: new FormControl('name'),
    });
  }

  // searchInData(searchData: string, searchColoumn: string) {
  //   if (!searchData) {
  //     this.users = this.usersOrigData$;
  //     return;
  //   }
  //   this.users = this.usersOrigData$;
  //   let temp = this.users;
  //   this.users = temp.filter((user: any) =>
  //     user[searchColoumn].toLowerCase().includes(searchData)
  //   );
  // }

  sortData(columnName: string) {
    this.store.dispatch(sortUsers(columnName));
  }

  ngOnInit() {
    // this._dataService.getData().subscribe((data) => {
    //   this.users = data;
    //   this._usersOrigData = data;
    // });
    this.store.dispatch(loadUsers());
    this.users$ = this.store.select((state) => state.users);
    console.log(this.users$);
    // this.searchControl.valueChanges.subscribe((value) => {
    //   this.searchInData(value.search, value.radioInput);
    // });
  }
}
