import { Component, OnInit } from '@angular/core';
import { BoutiqueService } from 'src/app/services/boutique.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Boutique } from 'src/app/model/boutique.model';


@Component({
  selector: 'app-create-boutique',
  templateUrl: './create-boutique.component.html',
  styleUrls: ['./create-boutique.component.scss']
})
export class CreateBoutiqueComponent implements OnInit {

  public currentBoutique: Boutique = new Boutique();
  public mode: number = 0;
  public idBoutique: number;
  public boutique = new Boutique();

  constructor(private boutService: BoutiqueService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idBoutique = this.route.snapshot.params['id'];
    this.boutService.getBoutiqueById(this.idBoutique).subscribe((data) => {
      this.currentBoutique = data;
     }, error => {
      console.log(error);
    });
  }


  saveBoutique(bout: Boutique) {
    this.boutService.createBoutique(bout).subscribe((result: Boutique) => {
      if (result.idBoutique) {
        this.router.navigateByUrl("boutique-list");
      }else {
        console.error();
      }

    });
  }

  updateBoutique(bout: Boutique) {
    this.boutService.updateBoutique(this.idBoutique, bout).subscribe((data)  => {
      this.currentBoutique = data;
      this.router.navigateByUrl("boutique-list");
    }, error  => {
      console.log(error);
    });

  }

  onGotoBoutiqueList() {
    this.router.navigateByUrl("boutique-list");
  }

}
