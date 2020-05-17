import { Employee } from './../model/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[];

  constructor(public empService: EmployeeService, public router: Router) { }

  ngOnInit() {
    this.loadEmployees();
  }

  // Get employees list
  loadEmployees() {
    this.empService.getEmployees().subscribe((data) => {
      this.employees = data;
    });

  }

 
  onEditEmployee(emp) {

  }

  onDeleteEmployee(emp) {
    
  }


}
