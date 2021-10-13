import { loadUsersSucces } from './users-table.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { loadUsers } from 'src/app/user-table/state/users-table.action';
import { UsersTableService } from 'src/app/services/user-table.service';

@Injectable()
export class UsersTableEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersTableService
  ) {}

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() => {
        return this.usersService.getUsers().pipe(
          map((users) => {
            return loadUsersSucces({ users });
          })
        );
      })
    );
  });
}
