

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseURL = "http://localhost:8080/admin/login";

  constructor(private httpClient: HttpClient) { }

  loginAdmin(admin: Admin): Observable<Admin> {
    console.log(admin)
    return this.httpClient.post<Admin>(this.baseURL,admin);
  }
}