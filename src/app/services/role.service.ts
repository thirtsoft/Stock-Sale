import { Role } from './../model/role.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = "http://localhost:8080/admin_stock";


  constructor(private http: HttpClient) { }

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl + "/roles");

  }

  public getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(this.apiUrl + '/roles/' + id);
  }

  // HttpRole  API post() method => Create Role
  public createRole (role: Role ): Observable<Role> {
    return this.http.post<Role >(this.apiUrl + '/roles', role);
  }

  // HttpRole  API put() method => Update Role
  public updateRole (id: number, role : Role ): Observable<Role> {
    return this.http.put<Role >(this.apiUrl + '/roles/' + id, role );

  }

  // HttpRole  API delete() method => Delete Role
  public deleteRoleById(id: number){
    return this.http.delete<Role >(this.apiUrl + '/roles/' + id)

  }

}
