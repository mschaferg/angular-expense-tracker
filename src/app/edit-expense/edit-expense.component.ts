import { Component, Input, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrl: './edit-expense.component.scss'
})
export class EditExpenseComponent implements OnInit {
  @Input() data: any;
  editExpenseForm!: any;
  expenseId!: any;

  setFormFields() {
     this.editExpenseForm = this.formBuilder.group({
     description: ['', [Validators.required]],
     amount: ['', [Validators.required]],
     date: ['', [Validators.required]],
  })
  }
  
  constructor(
     private expenseService: ExpenseService,
     private formBuilder: FormBuilder,
     public toastr: ToastrService,
     public dialogRef: MatDialogRef<EditExpenseComponent>
  ) {}

  ngOnInit(): void {
     this.setFormFields();
     this.getExpenseById({id: this.data.id});
  }

  getExpenseById(id: any): void {
    this.expenseService.getExpenseById(id).subscribe((expense) => {
      this.expenseId = expense.id;
      this.editExpenseForm.patchValue({
         description: expense.description,
         amount: expense.amount,
         date: expense.date
      })
    });
 }

  updateExpense(): void {
     if (!this.editExpenseForm.valid) {
        this.toastr.error('Please complete the form.', 'Error!')
        return
     } else {
        let inputParams = {
        description: this.editExpenseForm.value.description ? this.editExpenseForm.value.description : null,
        amount: this.editExpenseForm.value.amount ? this.editExpenseForm.value.amount : null,
        date: this.editExpenseForm.value.date ? this.editExpenseForm.value.date : null,
        id: this.expenseId? this.expenseId : null,

     }
     this.expenseService.updateExpense(inputParams).subscribe(() => {
        this.toastr.success('Your expense has been successfully updated.', 'Success!')
     });
     if (this.data.isDialog) {
      this.dialogRef.close()
     }
     }
     
  }
}

export default EditExpenseComponent