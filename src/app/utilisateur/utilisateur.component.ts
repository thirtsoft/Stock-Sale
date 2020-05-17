import { Router } from '@angular/router';
import { UtilisateurService } from './../services/utilisateur.service';
import { Utilisateur } from './../model/utilisateur.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  public utilisateurs: Utilisateur[];

  constructor(public userService: UtilisateurService, public router: Router) { }

  ngOnInit() {
    this.loadUtilisateurs();
  }

  // Get employees list
  loadUtilisateurs() {
    this.userService.getUtilisateurs().subscribe((data) => {
      this.utilisateurs = data;
    });

  }

 
  onEditUtilisateur(user) {

  }

  onDeleteUtilisateur(user) {
    
  }


}
