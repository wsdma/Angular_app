import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [AppComponent, UserTableComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
