import { Approvisionnement } from './../model/approvisionnement.model';
import { Router } from '@angular/router';
import { ApprovisionementService } from './../services/approvisionement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approvisionnement',
  templateUrl: './approvisionnement.component.html',
  styleUrls: ['./approvisionnement.component.scss']
})
export class ApprovisionnementComponent implements OnInit {

  public approvisionnements: Approvisionnement[];

  constructor(public approService: ApprovisionementService, public router: Router) { }

  ngOnInit() {
    this.loadApprovisionnements();
  }

  // Get employees list
  loadApprovisionnements() {
    this.approService.getApprovisionnements().subscribe((data) => {
      this.approvisionnements = data;
    });

  }

 
  onEditApprovisionnement(appro) {

  }

  onDeleteApprovisionnement(appro) {
    
  }

}
