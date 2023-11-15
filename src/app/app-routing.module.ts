import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'expenses', loadChildren: () => import('./expense-list/expense-list.module').then(m => m.ExpenseListModule) },
  { path: 'add-expense', loadChildren: () => import('./add-expense/add-expense.module').then(m => m.AddExpenseModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
