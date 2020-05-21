import { Component, OnInit } from '@angular/core';
import { Inventaire } from 'src/app/model/inventaire.model';
import { Boutique } from 'src/app/model/boutique.model';
import { InventaireService } from 'src/app/services/inventaire.service';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-inventaire',
  templateUrl: './create-inventaire.component.html',
  styleUrls: ['./create-inventaire.component.scss']
})
export class CreateInventaireComponent implements OnInit {

  public currentInventaire: Inventaire = new Inventaire();
  public mode: number = 0;
  public idInv: number;
  public inventaire = new Inventaire();
  public boutiques: Boutique[];

  constructor(private invService: InventaireService, private boutService: BoutiqueService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.idInv = this.route.snapshot.params['id'];
    this.invService.getInventaireById(this.idInv).subscribe((data) => {
      this.currentInventaire = data;
    }, error => {
      console.log(error);
    });

    this.getAllBoutiques();

  }

  getAllBoutiques() {
    this.boutService.getBoutiques().subscribe((data) => {
      this.boutiques = data;
    }, error => {
      console.log(error);
    });

  }

  saveInventaire(inv: Inventaire) {
    this.invService.createInventaire(inv).subscribe((result: Inventaire) => {
      if (result.idInventaire) {
        this.router.navigateByUrl("inventaire-list");
      }
    }, error => {
      console.log(error);
    });

  }

  updateInventaire(inv: Inventaire) {
    this.invService.updateInventaire(this.idInv, inv).subscribe((data) => {
      this.currentInventaire = data;
      this.router.navigateByUrl("inventaire-list");
    }, error => {
      console.log(error);
    });

  }

  onGoToListInventaire() {
    this.router.navigateByUrl("inventaire-list");
  }

}
