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

@NgModule({
  declarations: [
    AppComponent,
    EditExpenseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddExpenseModule,
    ExpenseListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    EditExpenseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
