import { Router } from '@angular/router';
import { RoleService } from './../services/role.service';
import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  public roles: Role[];

  constructor(public roleService: RoleService, public router: Router) { }

  ngOnInit() {
    this.loadRoles();
  }

  // Get employees list
  loadRoles() {
    this.roleService.getRoles().subscribe((data) => {
      this.roles = data;
    });

  }

 
  onEditRole(role) {

  }

  onDeleteRole(role) {
    
  }


}
