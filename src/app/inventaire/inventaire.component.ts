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

  // Get Inventaire list
  loadInventaires() {
    this.invService.getInventaires().subscribe((data) => {
      this.inventaires = data;
    }, error => {
      console.log(error);
    });

  }


  onEditInventaire(inv: Inventaire) {
    this.router.navigate(['/edit-inventaire/' + inv.idInventaire]);

  }

  onDeleteInventaire(inv: Inventaire) {
    let conf = confirm("Etes-vous sur de supprimer cet inventaire");
    if (!conf) return;
    this.invService.deleteInventaireById(inv.idInventaire).subscribe((data) => {
      this.loadInventaires();
    }, error => {
      console.log(error);
    });

  }

  onCreateInventaire() {
    this.router.navigate(['/create-inventaire']);
  }


}
