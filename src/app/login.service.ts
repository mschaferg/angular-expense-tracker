import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class LoginService {
   private apiUrl = 'https://node-expense-tracker-production.up.railway.app';
//    private apiUrl = 'http://localhost:3000';
   public isLoggedIn = false;

   constructor(private http: HttpClient) {}

   login(loginCred: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, loginCred)
   }

   getUsers(): Observable<any>  {
      return this.http.get(`${this.apiUrl}/users`);
   }

   getUserById(id: number): Observable<any> {
      return this.http.post(`${this.apiUrl}/userById`, id)
   }

   updateUser(expense: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/updateUser`, expense)
   }

   addNewUser(newUser: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/createUser`, newUser);
   }

   deleteUser(expense: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/deleteUser`, expense);
   }
}