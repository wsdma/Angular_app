import { UsersEffects } from './user-table/state/users-table.effects';
import { UsersService } from './services/user-table.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersTableReducer } from './user-table/state/users-table.reducer';

@NgModule({
  declarations: [AppComponent, UserTableComponent, SearchFormComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ users: usersTableReducer }),
    EffectsModule.forRoot([UsersEffects]),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
