import { Router } from '@angular/router';
import { VersementService } from './../services/versement.service';
import { Versement } from './../model/versement.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-versement',
  templateUrl: './versement.component.html',
  styleUrls: ['./versement.component.scss']
})
export class VersementComponent implements OnInit {

  public versements: Versement[];

  constructor(public verService: VersementService, public router: Router) { }

  ngOnInit() {
    this.loadVersements();
  }

  // Get employees list
  loadVersements() {
    this.verService.getVersements().subscribe((data) => {
      this.versements = data;
    });

  }

 
  onEditVersement(vers) {

  }

  onDeleteVersement(vers) {
    
  }

}
