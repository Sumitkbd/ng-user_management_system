import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  // GET API - get all user data
  getUsers() {
    return this.http.get<any[]>('http://localhost:3000/api/users');
  }
  //  POST API - Add-User component
  addUser(userData: any): void {
    this.http.post('http://localhost:3000/api/users', userData).subscribe(() => {
      console.log('User added successfully');
    });
  }

  //DELETE API
  deleteUser(id: string) {
    return this.http.delete(`http://localhost:3000/api/users/${id}`);
  }

  // Search API
  private apiUrl = 'http://localhost:3000/api/users/search/';
  searchUsers(key: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${key}`);
  }

  // Sign Up API 
  signup(data: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/auth/register', data);
  }

  //Login API
  signin(data: any): Observable<any[]> {
    return this.http.post<any[]>('http://localhost:3000/auth/login', data);
  }

  //Profile API
  getProfile(): Observable<any[]> {
    let headers = {
      'Authorization': "Bearer " + localStorage.getItem("token")
    }
    return this.http.get<any>('http://localhost:3000/auth/profile', { headers: headers });
  }

  //  POST API - Add-User component
  completeProfile(userData: any): void {
    this.http.post('http://localhost:3000/auth/register', userData).subscribe(() => {
      console.log('User added successfully');
    });
  }



}
