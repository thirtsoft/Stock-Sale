import { Router } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Client } from './../../model/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  public client = new Client();

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  saveClient(dataClient: Client) {
    this.clientService.createClient(dataClient).subscribe((result: Client) => {
      if (result.idClient) {
        this.router.navigateByUrl("client-list");
      }else {
        console.error();
        
      }
      
    });
  }

}

