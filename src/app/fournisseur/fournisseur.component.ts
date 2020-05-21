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
    }, error => {
      console.log(error);
    });

  }


  onEditFournisseur(four: Fournisseur) {
    this.router.navigate(['/edit-fournisseur/'+ four.idFournisseur]);

  }

  onDeleteFournisseur(four: Fournisseur) {
    let conf = confirm("Etes vous sur de vouloir supprimer Ce fournisseur");
    if(!conf) return;
    this.fourService.deleteFournisseurById(four.idFournisseur).subscribe((data) => {
      this.loadFournisseurs();
    }, error => {
      console.log(error);
    });

  }

  onCreateFournisseur() {
    this.router.navigate(['/create-fournisseur']);
  }

}
