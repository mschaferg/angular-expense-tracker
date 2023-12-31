import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class ExpenseService {
   private apiUrl = 'https://node-expense-tracker-production.up.railway.app';
   // private apiUrl = 'http://localhost:3000';

   constructor(private http: HttpClient) {}

   exportCsv(id: any): Observable<any>  {
      return this.http.post(`${this.apiUrl}/exportCsv`, id, {responseType: 'text'});
   }

   getExpenses(id: any): Observable<any>  {
      return this.http.post(`${this.apiUrl}/userExpenses`, id);
   }

   getExpenseById(id: number): Observable<any> {
      return this.http.post(`${this.apiUrl}/expenseById`, id)
   }

   updateExpense(expense: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/update`, expense)
   }

   addExpense(expense: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/expenses`, expense);
   }

   deleteExpense(expense: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/delete`, expense);
   }
}