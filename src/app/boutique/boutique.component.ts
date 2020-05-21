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
    }, error => {
      console.log(error);
    });

  }

  onEditBoutique(shop: Boutique) {
    this.router.navigate(['/edit-boutique/' +shop.idBoutique]);

  }

  onDeleteBoutique(shop: Boutique) {
    let conf = confirm("Est-vous sur de vouloir supprimer cet boutique");
    if (!conf) return;
    this.boutService.deleteBoutiqueById(shop.idBoutique).subscribe((data) => {
      this.loadBoutiques();
    }, error => {
      console.log(error);
    });


  }

  onCreateBoutique() {
    this.router.navigate(['/create-boutique']);
  }


}
