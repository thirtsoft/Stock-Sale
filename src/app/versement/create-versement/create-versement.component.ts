import { Component, OnInit } from '@angular/core';
import { Versement } from 'src/app/model/versement.model';
import { Employee } from 'src/app/model/employee.model';
import { Boutique } from 'src/app/model/boutique.model';
import { VersementService } from 'src/app/services/versement.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-versement',
  templateUrl: './create-versement.component.html',
  styleUrls: ['./create-versement.component.scss']
})
export class CreateVersementComponent implements OnInit {

  public currentVersment: Versement = new Versement();
  public mode: number = 0;
  public idVersment: number;
  public versement = new Versement();

  public boutiques: Boutique[];
  public employees: Employee[];

  constructor(private verService: VersementService, private boutService: BoutiqueService, private empService: EmployeeService,
     private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idVersment = this.route.snapshot.params['id'];
    this.verService.getVersementById(this.idVersment).subscribe((data)  => {
      this.currentVersment = data;
    }, error  => {
      console.log(error);
    });

    this.getAllEmployees();
    this.getAllBoutiques();
  }

  getAllEmployees() {
    this.empService.getEmployees().subscribe((data)  => {
      this.employees = data;
    }, error  => {
      console.log(error);
    });

  }

  getAllBoutiques() {
    this.boutService.getBoutiques().subscribe((data)  => {
      this.boutiques = data;
    }, error  => {
      console.log(error);
    });

  }

  saveVersement(vers: Versement) {
    this.verService.createVersement(vers).subscribe((result: Versement)  => {
      if (result.idVersement) {
        this.router.navigateByUrl("versement-list");
      }
    }, error  => {
      console.log(error);
    });

  }

  updateVersement(vers: Versement) {
    this.verService.updateVersement(this.idVersment, vers).subscribe((data)  => {
      this.currentVersment = data;
      this.router.navigateByUrl("versement-list");
    }, error  => {
      console.log(error);
    });

  }

  onGoToListVersement() {
    this.router.navigateByUrl("versement-list")
  }

}
