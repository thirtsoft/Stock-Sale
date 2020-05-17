import { Router } from '@angular/router';
import { InventaireService } from './../services/inventaire.service';
import { Inventaire } from './../model/inventaire.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss']
})
export class InventaireComponent implements OnInit {

  public inventaires: Inventaire[];

  constructor(public invService: InventaireService, public router: Router) { }

  ngOnInit() {
    this.loadInventaires();
  }

  // Get employees list
  loadInventaires() {
    this.invService.getInventaires().subscribe((data) => {
      this.inventaires = data;
    });

  }

 
  onEditInventaire(inv) {

  }

  onDeleteInventaire(inv) {
    
  }


}
