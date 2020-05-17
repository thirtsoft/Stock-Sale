import { Router } from '@angular/router';
import { FournisseurService } from './../services/fournisseur.service';
import { Fournisseur } from './../model/fournisseur.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  public fournisseurs: Fournisseur[];

  constructor(public fourService: FournisseurService, public router: Router) { }

  ngOnInit() {
    this.loadFournisseurs();
  }

  // Get employees list
  loadFournisseurs() {
    this.fourService.getFournisseurs().subscribe((data) => {
      this.fournisseurs = data;
    });

  }

 
  onEditFournisseur(four) {

  }

  onDeleteFournisseur(four) {
    
  }

}
