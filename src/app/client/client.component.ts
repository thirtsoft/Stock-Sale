import { Client } from './../model/client.model';
import { Router } from '@angular/router';
import { ClientService } from './../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  public clients: Client[];

  constructor(public clientService: ClientService, public router: Router) { }

  ngOnInit() {
    this.loadClients();
  }

  // Get employees list
  loadClients() {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
    });

  }

  
  onEditCat(cat) {

  }

  onDeleteCat(cat) {
    
  }

  

}
