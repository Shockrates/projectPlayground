import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>('http://localhost:1337/employee');
    //return this.http.get<any>('https://typescriptproject-d2608-default-rtdb.firebaseio.com/Users.json');
    
  }
}
