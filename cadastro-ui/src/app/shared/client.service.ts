import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly API = 'http://localhost:8080/api';
  private client = new Client();

  constructor(private http: HttpClient, private router: Router) { }

  listClients() {
    return this.http.get<Client[]>(`${this.API}/clientes`);
  }

  addClient(client) {
    return this.http.post(`${this.API}/cliente`, client);
  }

  updateClient(client: Client) {
    return this.http.put(`${this.API}/cliente/` + client.id, client);
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.API}/cliente/` + id);
  }

  // Routes navigation
  rotaList() {
    this.router.navigate(['/list']);
  }

  rotaForm() {
    this.router.navigate(['/form']);
  }

  // Getters and Setters
  setter(client: Client) {
    this.client = client;
  }

  getter() {
    return this.client;
  }

}
