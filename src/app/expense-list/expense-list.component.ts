import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent implements OnInit {
   displayedColumns: string[] = ['date', 'description', 'amount', 'delete'];
   expenses!: any;
   expenseListForm = this.formBuilder.group({
      expenses: [[], []]
   })

  constructor(
   private expenseService: ExpenseService,
   private formBuilder: FormBuilder
   ) {}

  ngOnInit(): void {
      this.getExpenses();
  }

  getExpenses(): void {
     this.expenseService.getExpenses().subscribe((expenses) => {
      this.expenses = expenses
      this.expenseListForm.patchValue({
         expenses: expenses
      })
     });
  }

  delete(expenses: any) {
   this.expenseService.deleteExpense(expenses).subscribe((e) => {
      this.getExpenses()
   })
  }
}

export default ExpenseListComponent