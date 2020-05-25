import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from './../../services/client.service';
import { Client } from './../../model/client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  public currentClient: Client = new Client();
  public mode: number= 0;
  public idClient: number;
  public client = new Client();

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   /*  this.idClient = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.idClient).subscribe((data) => {
      this.currentClient = data;
    }, error => {
      console.log(error);
    }); */
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

  updateClient(client: Client) {
    this.clientService.updateClient(this.idClient, client).subscribe((data)  => {
      this.currentClient = data;
      this.router.navigateByUrl("client-list");
    }, error  => {
      console.log(error);
    });

  }

  onGotoClientList() {
    this.router.navigateByUrl("client-list");
  }

}

