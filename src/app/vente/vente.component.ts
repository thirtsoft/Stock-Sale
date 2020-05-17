import { Router } from '@angular/router';
import { VenteService } from './../services/vente.service';
import { Vente } from './../model/vente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {

  public ventes: Vente[];

  constructor(public ventService: VenteService, public router: Router) { }

  ngOnInit() {
    this.loadVentes();
  }

  // Get employees list
  loadVentes() {
    this.ventService.getVentes().subscribe((data) => {
      this.ventes = data;
    });

  }

 
  onEditVente(vent) {

  }

  onDeleteVente(vent) {
    
  }

}
