import { CommandeFournisseur } from './../model/commande-Fournisseur.model';
import { Router } from '@angular/router';
import { CommandeFournisseurService } from './../services/commande-fournisseur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-fournisseur',
  templateUrl: './commande-fournisseur.component.html',
  styleUrls: ['./commande-fournisseur.component.scss']
})
export class CommandeFournisseurComponent implements OnInit {

  public commandeFournisseurs: CommandeFournisseur[];

  constructor(public cmdFourService: CommandeFournisseurService, public router: Router) { }

  ngOnInit() {
    this.loadCommandeFournisseurs();
  }

  // Get employees list
  loadCommandeFournisseurs() {
    this.cmdFourService.getCommandeFournisseurs().subscribe((data) => {
      this.commandeFournisseurs = data;
    });

  }


  onEditCommandeFournisseur(cmdFournisseur) {

  }

  onDeleteCommandeFournisseur(cmdFournisseur) {

  }

  onCreateCommandeFournisseur() {
    this.router.navigate(['/create-commandeFournisseur']);
  }


}
