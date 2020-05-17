import { Boutique } from './../model/boutique.model';
import { Router } from '@angular/router';
import { BoutiqueService } from './../services/boutique.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent implements OnInit {

  public boutiques: Boutique[];

  constructor(public boutService: BoutiqueService, public router: Router) { }

  ngOnInit() {
    this.loadBoutiques();
  }

  // Get employees list
  loadBoutiques() {
    this.boutService.getBoutiques().subscribe((data) => {
      this.boutiques = data;
    });

  }

 
  onEditBoutique(boutique) {

  }

  onDeleteBoutique(boutique) {
    
  }


}
