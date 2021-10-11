import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  public users: any;
  private _usersOrigData: any;
  public searchControl: FormGroup;

  constructor(private _dataService: DataService) {
    this.searchControl = new FormGroup({
      search: new FormControl(),
      radioInput: new FormControl('name'),
    });
  }

  searchInData(searchData: string, searchColoumn: string) {
    if (!searchData) {
      this.users = this._usersOrigData;
      return;
    }
    this.users = this._usersOrigData;
    let temp = this.users;
    this.users = temp.filter((user: any) =>
      user[searchColoumn].toLowerCase().includes(searchData)
    );
  }

  sortData(dataType: string) {
    let temp = this.users;
    this.users = temp.sort((a: any, b: any) => {
      if (a[dataType] < b[dataType]) return -1;
      if (a[dataType] > b[dataType]) return 1;
      return 0;
    });
  }

  ngOnInit() {
    this._dataService.getData().subscribe((data) => {
      this.users = data;
      this._usersOrigData = data;
    });
    this.searchControl.valueChanges.subscribe((value) => {
      this.searchInData(value.search, value.radioInput);
    });
  }
}
