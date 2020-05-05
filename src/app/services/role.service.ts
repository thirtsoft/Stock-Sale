import { Role } from './../model/role.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = "http://localhost:8080/admin_stock";

  constructor(private http: HttpClient) { }

  public getRoles(): Observable<Role> {
    return this.http.get<Role>(this.apiUrl + "/roles");

  }

  public getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(this.apiUrl + '/roles/' + id);
  }  

  // HttpRole API post() method => Create Role
  public createRole(Role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl + '/roles', Role);
  }  

  // HttpRole API put() method => Update Role
  public updateRole(id: number, Role: Role): Observable<Role> {
    return this.http.put<Role>(this.apiUrl + '/roles/' + id, Role);
    
  }

  // HttpRole API delete() method => Delete Role
  public deleteRoleById(id: number){
    return this.http.delete<Role>(this.apiUrl + '/roles/' + id)
    
  }



}
