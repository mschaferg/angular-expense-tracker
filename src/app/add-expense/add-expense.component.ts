import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent implements OnInit {
   addExpenseForm!: any;

   setFormFields() {
      this.addExpenseForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      date: ['', [Validators.required]],
   })
   }
   
   constructor(
      private expenseService: ExpenseService,
      private formBuilder: FormBuilder,
      public toastr: ToastrService
   ) {}

   ngOnInit(): void {
      this.setFormFields();
   }

   addExpense(): void {
      if (!this.addExpenseForm.valid) {
         this.toastr.error('Please complete the form.', 'Error!')
         return
      } else {
         let inputParams = {
         description: this.addExpenseForm.value.description ? this.addExpenseForm.value.description : null,
         amount: this.addExpenseForm.value.amount ? this.addExpenseForm.value.amount : null,
         date: this.addExpenseForm.value.date ? this.addExpenseForm.value.date : null,

      }
      this.expenseService.addExpense(inputParams).subscribe(() => {
         this.toastr.success('Your expense has been successfully logged.', 'Success!')
         this.addExpenseForm.reset();
      });
      }
      
   }
}

export default AddExpenseComponent
