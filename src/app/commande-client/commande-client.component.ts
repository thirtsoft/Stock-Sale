import { CommandeClient } from './../model/commande-Client.model';
import { Router } from '@angular/router';
import { CommandeClientService } from './../services/commande-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande-client',
  templateUrl: './commande-client.component.html',
  styleUrls: ['./commande-client.component.scss']
})
export class CommandeClientComponent implements OnInit {

  public commandeClients: CommandeClient[];

  constructor(public cmdClientService: CommandeClientService, public router: Router) { }

  ngOnInit() {
    this.loadCommandeClients();
  }

  // Get employees list
  loadCommandeClients() {
    this.cmdClientService.getCommandeClients().subscribe((data) => {
      this.commandeClients = data;
    });

  }

 
  onEditCommandeClient(cmdClient) {

  }

  onDeleteCommandeClient(cmdClient) {
    
  }

}
