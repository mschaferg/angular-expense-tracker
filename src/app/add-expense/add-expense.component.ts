import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder, Validators } from '@angular/forms';

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
      private formBuilder: FormBuilder
   ) {}

   ngOnInit(): void {
      this.setFormFields();
   }

   addExpense(): void {
      if (!this.addExpenseForm.valid) {
         alert('Please complete the form.')
         return
      } else {
         let inputParams = {
         description: this.addExpenseForm.value.description ? this.addExpenseForm.value.description : null,
         amount: this.addExpenseForm.value.amount ? this.addExpenseForm.value.amount : null,
         date: this.addExpenseForm.value.date ? this.addExpenseForm.value.date : null,

      }
      this.expenseService.addExpense(inputParams).subscribe(() => {
         this.addExpenseForm.reset();
      });
      }
      
   }
}

export default AddExpenseComponent
