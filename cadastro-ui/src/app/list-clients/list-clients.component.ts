import { ClientService } from './../shared/client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/client';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss'],
  preserveWhitespaces: true
})
export class ListClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {

    this.clientService.listClients()
      .pipe(take(1))
      .subscribe(dados => this.clients = dados);

  }

  onUpdate(client) {
    this.clientService.setter(client);
    this.clientService.rotaForm();
  }

  onNewClient() {
    const client = new Client();
    this.clientService.setter(client);
    this.clientService.rotaForm();
  }

  onRemove(client) {
    this.clientService.deleteClient(client.id)
      .pipe(take(1))
      .subscribe((data: Client) => {
        this.clients.splice(this.clients.indexOf(client), 1);
      });
  }

}
