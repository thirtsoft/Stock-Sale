import { Depense } from './../model/depense.model';
import { Router } from '@angular/router';
import { DepenseService } from './../services/depense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {

  public depenses: Depense[];

  constructor(public depenseService: DepenseService, public router: Router) { }

  ngOnInit() {
    this.loadDepenses();
  }

  // Get employees list
  loadDepenses() {
    this.depenseService.getDepenses().subscribe((data) => {
      this.depenses = data;
    });

  }

 
  onEditDepense(dep) {

  }

  onDeleteDepense(dep) {
    
  }


}
