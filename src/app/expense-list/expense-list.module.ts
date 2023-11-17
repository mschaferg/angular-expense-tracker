import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';



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
    MatDialogModule
  ],
  exports: [
    ExpenseListComponent
  ]
})
export class ExpenseListModule { }
