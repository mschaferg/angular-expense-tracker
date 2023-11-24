import { Component, ViewChild } from '@angular/core';
import { ExpenseListComponent } from './expense-list/expense-list.component'
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'expense-tracker';
  isLoggedIn = false;
  newUser = false;
  user_id!: number;

  @ViewChild(ExpenseListComponent) private expenseListComponent!: ExpenseListComponent;
  @ViewChild(AddExpenseComponent) private addExpenseComponent!: AddExpenseComponent;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public loginService: LoginService
    ) {}

  login (event: boolean) {
    this.isLoggedIn = event;
  }

  createUser (event: boolean) {
    this.newUser = event;
  }

  getUserId(event: number) {
    this.user_id = event;
  }

  onTabChanged(event: MatTabChangeEvent) {
    if(event.index == 1) {
      this.expenseListComponent.getExpenses();
    }
  }
}
