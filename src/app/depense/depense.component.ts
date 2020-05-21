import { Depense } from './../model/depense.model';
import { Router } from '@angular/router';
import { DepenseService } from './../services/depense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.scss']
})
export class DepenseComponent implements OnInit {

  public depenses: Depense[];

  constructor(public depService: DepenseService, public router: Router) { }

  ngOnInit() {
    this.loadDepenses();
  }

  // Get employees list
  loadDepenses() {
    this.depService.getDepenses().subscribe((data) => {
      this.depenses = data;
    }, error=> {
      console.log(error);
    } );

  }


  onEditDepense(dep: Depense) {
    this.router.navigate(['/edit-depense/' + dep.idDepense]);

  }

  onDeleteDepense(dep: Depense) {
    let conf = confirm("Etes vous sur de vouloir supprimer Cet Article");
    if(!conf) return;
    this.depService.deleteDepenseById(dep.idDepense).subscribe((data) => {
      this.loadDepenses();
    }, error => {
      console.log(error);
    });

  }

  onCreateDepense() {
    this.router.navigate(['/create-depense']);
  }


}
