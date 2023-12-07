import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpenseModule } from './add-expense/add-expense.module';
import { ExpenseListModule } from './expense-list/expense-list.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { ToastrModule } from 'ngx-toastr';
import { EditExpenseDialogComponent } from './dialogs/edit-expense-dialog/edit-expense-dialog.component';
import { EditExpenseModule } from './edit-expense/edit-expense.module';
import { LoginModule } from './login/login.module';
import { NewUserModule } from './new-user/new-user.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    EditExpenseDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddExpenseModule,
    ExpenseListModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    EditExpenseModule,
    NewUserModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
