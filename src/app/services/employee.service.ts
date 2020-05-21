import { Employee } from './../model/employee.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + "/employees");

  }

  public getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + '/employees/' + id);
  }

  // HttpEmployee  API post() method => Create employee
  public createEmployee (employee: Employee ): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + '/employees', employee);
  }

  // HttpEmployee  API put() method => Update employee
  public updateEmployee (id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.apiUrl + '/employees/' + id, employee );

  }

  // HttpEmployee  API delete() method => Delete employee
  public deleteEmployeeById(id: number){
    return this.http.delete<Employee>(this.apiUrl + '/employees/' + id)

  }

}
