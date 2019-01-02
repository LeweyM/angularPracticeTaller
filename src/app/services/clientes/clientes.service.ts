import { Injectable } from '@angular/core';
import Client from './lp-Client';
import { Observable, of } from "rxjs" 

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  mockData: Client[] = [
    {id: 1, nombre: "Lewey", apellidos: ["Bonathan", "Metcalf"], dni: "123EXAMPLE"},
    {id: 2, nombre: "Martin", apellidos: ["Bonathan", "Metcalf"], dni: "567EXAMPLE"},
    {id: 3, nombre: "Sara", apellidos: ["Bonathan", "Metcalf"], dni: "489EXAMPLE"}
  ];

  constructor() { }

  getClientes(): Observable<Client[]> {
      return of(this.mockData)
  }

  addClient(client: Client): Observable<any> {
    this.mockData.push(client);
    return of("TODO, proper api response")
  }

  updateClient(client: Client): Observable<any> {
    console.log(this.mockData)
    let selectedIndex = this.mockData.findIndex(el => client.id === el.id)
    this.mockData.splice(selectedIndex, 1, client)
    return of("TODO, proper api response")
  }

}
