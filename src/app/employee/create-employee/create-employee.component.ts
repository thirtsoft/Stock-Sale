import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee.model';
import { Boutique } from 'src/app/model/boutique.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  public currentEmployee: Employee = new Employee();
  public mode: number = 0;
  public idEmp: number;
  public employee = new Employee();
  public boutiques: Boutique[];

  constructor(private empService: EmployeeService, private boutService: BoutiqueService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
   /*  this.idEmp = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.idEmp).subscribe((data) => {
      this.currentEmployee = data;
    }, error => {
      console.log(error);
    });
 */
    this.getAllBoutiques();

  }

  getAllBoutiques() {
    this.boutService.getBoutiques().subscribe((data) => {
      this.boutiques = data;
    }, error => {
      console.log(error);
    });
  }

  saveEmployee(emp: Employee) {
    this.empService.createEmployee(emp).subscribe((result: Employee) => {
      if (result.id) {
        this.router.navigateByUrl("employee-list");
      }
    }, error => {
      console.log(error);
    });

  }

  updateEmployee(emp: Employee) {
    this.empService.updateEmployee(this.idEmp, emp).subscribe((data) => {
      this.currentEmployee = data;
      this.router.navigateByUrl("employee-list");
    }, error => {
        console.log(error);
    });

  }

  onGoToListEmployee() {
    this.router.navigateByUrl("employee-list");

  }

}
