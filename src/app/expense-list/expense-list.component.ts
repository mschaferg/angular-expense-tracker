import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditExpenseDialogComponent } from '../dialogs/edit-expense-dialog/edit-expense-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

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
   currencyForm = this.formBuilder.group({
      code: ['', []]
   })
   currencies: any = []
   currencyRates: any = [];
   currencyRate!: any;
   currencyInfo!: any;
   @Input() user_id!: number;

  constructor(
   private expenseService: ExpenseService,
   private formBuilder: FormBuilder,
   public dialog: MatDialog,
   public toastr: ToastrService,
   public spinner: NgxSpinnerService
   ) {}

  ngOnInit(): void {
   this.getExpenses();
  }

  getExpenses(): void {
   this.spinner.show()
   let inputParams = {
      user_id: this.user_id,
      base: this.currencyForm.value.code
   }
     this.expenseService.getExpenses(inputParams).subscribe((expenses) => {
      this.spinner.hide()
      if (this.currencies.length === 0) {
         const rateInfo = Object.entries(expenses.rateInfo.data);
         rateInfo.forEach((el: any) => {
            this.currencies.push({
               name: el[1].name,
               name_plural: el[1].name_plural,
               symbol: el[1].symbol,
               symbol_native: el[1].symbol_native,
               code: el[1].code,
               decimal_digits: el[1].decimal_digits,
            })
         })

         const rate = Object.entries(expenses.rate.data);
         rate.forEach((el: any) => {
            this.currencyRates.push({
               code: el[0],
               exchangeRate: el[1]
            })
         })
         this.currencyForm.patchValue({
            code: 'USD'
         })
      }
      this.expenses = expenses.expenses
      this.expenseListForm.patchValue({
         expenses: expenses.expenses
      })
      this.exchangeCurrency();
     });
  }

  exchangeCurrency() {
   this.currencyInfo = this.currencies.filter((el: any) => {
      return el.code === this.currencyForm.value.code
   })
   this.currencyRate = this.currencyRates.filter((el: any) => {
      return el.code === this.currencyForm.value.code
   })
   this.expenses.forEach((el:any) => {
      el.amount = Math.ceil((el.amount * this.currencyRate[0].exchangeRate) * 100) / 100
   })
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