import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditExpenseDialogComponent } from '../dialogs/edit-expense-dialog/edit-expense-dialog.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent implements OnInit {
   displayedColumns: string[] = ['date', 'description', 'amount', 'edit', 'delete'];
   expenses!: any;
   expenseListForm = this.formBuilder.group({
      expenses: [[], []]
   })
   @Input() user_id!: number;

  constructor(
   private expenseService: ExpenseService,
   private formBuilder: FormBuilder,
   public dialog: MatDialog
   ) {}

  ngOnInit(): void {
      this.getExpenses();
  }

  getExpenses(): void {
   let inputParams = {
      user_id: this.user_id
   }
     this.expenseService.getExpenses(inputParams).subscribe((expenses) => {
      this.expenses = expenses
      this.expenseListForm.patchValue({
         expenses: expenses
      })
     });
  }

  edit(id: any) {
   const dialogRef = this.dialog.open(EditExpenseDialogComponent, {
      height: '600px',
      width: '800px',
      panelClass: 'custom-container',
      data: {
         id: id,
         isDialog: true
      }
   });

   dialogRef.afterClosed().subscribe(result=> {
      this.getExpenses();
   })
  }

  delete(expenses: any) {
   this.expenseService.deleteExpense(expenses).subscribe((e) => {
      this.getExpenses()
   })
  }
}

export default ExpenseListComponent