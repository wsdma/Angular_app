import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  public users: any;
  private _usersOrigData: any;
  constructor(private _dataService: DataService) {}

  searchInData(event: any) {
    this.users = this._usersOrigData;
    let temp = this.users;
    this.users = temp.filter((user: any) =>
      user.name.toLowerCase().includes(event.target.value)
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
  }
}
