import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExpenseListRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    ExpenseListComponent
  ]
})
export class ExpenseListModule { }
