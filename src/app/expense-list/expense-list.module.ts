import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';


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
    MatPaginatorModule
  ],
  exports: [
    ExpenseListComponent
  ]
})
export class ExpenseListModule { }
