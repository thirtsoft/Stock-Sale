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
    }, error => {
      console.log(error);
    });

  }


  onEditClient(client: Client) {
    this.router.navigate(['/edit-client/' +client.idClient]);
  }

  onDeleteClient(client: Client) {
    let conf = confirm("Etes vous sur de vouloir supprimer Cet Article");
    if(!conf) return;
    this.clientService.deleteClientById(client.idClient).subscribe((data) => {
      this.loadClients();
    }, error => {
      console.log(error);
    });

  }

  onCreateClient() {
    this.router.navigate(['/create-client']);
  }



}
