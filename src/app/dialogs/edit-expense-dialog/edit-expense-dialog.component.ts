import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogContainer } from '@angular/material/dialog';
import EditExpenseComponent from '../../edit-expense/edit-expense.component';

@Component({
  selector: 'app-edit-expense-dialog',
  templateUrl: './edit-expense-dialog.component.html',
  styleUrl: './edit-expense-dialog.component.scss'
})
export class EditExpenseDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<EditExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

close() {
  this.dialogRef.close()
}

}
