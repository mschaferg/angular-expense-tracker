import { Component, ViewChild } from '@angular/core';
import { ExpenseListComponent } from './expense-list/expense-list.component'
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expense-tracker';

  @ViewChild(ExpenseListComponent) private expenseListComponent!: ExpenseListComponent;
  @ViewChild(AddExpenseComponent) private addExpenseComponent!: AddExpenseComponent;

  constructor(public router: Router) {}

  onTabChanged(event: MatTabChangeEvent) {
    if(event.index == 1) {
      this.expenseListComponent.getExpenses();
    }
  }
}
