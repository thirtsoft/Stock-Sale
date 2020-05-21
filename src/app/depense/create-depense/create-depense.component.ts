import { Component, OnInit } from '@angular/core';
import { Depense } from 'src/app/model/depense.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DepenseService } from 'src/app/services/depense.service';
import { Boutique } from 'src/app/model/boutique.model';
import { BoutiqueService } from 'src/app/services/boutique.service';

@Component({
  selector: 'app-create-depense',
  templateUrl: './create-depense.component.html',
  styleUrls: ['./create-depense.component.scss']
})
export class CreateDepenseComponent implements OnInit {

  public currentDepense: Depense = new Depense();
  public mode: number = 0;
  public idDep: number;
  public depense = new Depense();
  public boutiques: Boutique[];

  constructor(private depService: DepenseService, private boutService: BoutiqueService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.idDep = this.route.snapshot.params['id'];
    this.depService.getDepenseById(this.idDep).subscribe((data) => {
      this.currentDepense = data;
    }, error => {
      console.log(error);
    });

    this.getAllBoutique();
  }

  getAllBoutique() {
    this.boutService.getBoutiques().subscribe((data) => {
      this.boutiques = data;
    }, error => {
      console.log(error);
    });
  }

  saveDepense(dep: Depense) {
    this.depService.createDepense(dep).subscribe((result: Depense) => {
      if (result.idDepense) {
        this.router.navigateByUrl("depense-list");
      }
    }, error  => {
      console.log(error);
    });
  }

  updateDepense(dep: Depense) {
    this.depService.updateDepense(this.idDep, dep).subscribe((data) => {
      this.currentDepense = data;
      this.router.navigateByUrl("depense-list");
    }, error => {
      console.log(error);
    });

  }

  onGoToListDepense() {
    this.router.navigateByUrl("depense-list");
  }

}
