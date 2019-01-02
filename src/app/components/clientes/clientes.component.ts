import { Component, OnInit } from "@angular/core";
import { ClientesService } from "../../services/clientes/clientes.service";
import Client from "../../services/clientes/lp-Client";

@Component({
  selector: "clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"]
})
export class ClientesComponent implements OnInit {
  clientes: Client[];
  cliente = {};
  displayController: any = { display: false };
  selectedClient: Client = null;
  isNewClient: boolean = false;

  constructor(private clientesService: ClientesService) {}

  getclientes(): void {
    this.clientesService
      .getClientes()
      .subscribe(clientes => (this.clientes = clientes));
  }

  showDialogToAdd(): void {
    this.cliente = {};
    this.isNewClient = true;
    this.displayController.display = true;
  }

  onRowSelect(): void {
    this.cliente = this.cloneClient(this.selectedClient);
    this.isNewClient = false;
    this.displayController.display = true;
  }

  cloneClient(c: Client): Client {
    let client = new Client();
    for (let prop in c) {
      client[prop] = c[prop];
    }
    return client;
  }

  ngOnInit() {
    this.getclientes();
  }
}
