import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Fournisseur } from 'src/app/model/fournisseur.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-fournisseur',
  templateUrl: './create-fournisseur.component.html',
  styleUrls: ['./create-fournisseur.component.scss']
})
export class CreateFournisseurComponent implements OnInit {

  public currentFournisseur: Fournisseur = new Fournisseur();
  public mode: number= 0;
  public idFour: number;
  public fournisseur = new Fournisseur();

  constructor(private fourService: FournisseurService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idFour = this.route.snapshot.params['id'];
    this.fourService.getFournisseurById(this.idFour)
      .subscribe(data => {
        this.currentFournisseur = data;
      },err=> {
        console.log(err);
      });
  }



  saveFournisseur(four: Fournisseur) {
    this.mode = 0;
    this.fourService.createFournisseur(four).subscribe(
      (result: Fournisseur) => {
        console.log(four);
        if (result.idFournisseur) {
          this.router.navigateByUrl("fournisseur-list");
        }

      },
      error=> {
       console.log(error);
      }
    );
  }

  updateFournisseur(four: Fournisseur) {
    this.mode = 1;
    this.fourService.updateFournisseur(this.idFour, four).subscribe(data => {
      this.currentFournisseur = data;
      this.router.navigateByUrl("fournisseur-list");
    }, error => {
      console.log(error);
    });
  }


  onGotoFournisseurList() {
    this.router.navigateByUrl("fournisseur-list")
  }

}
