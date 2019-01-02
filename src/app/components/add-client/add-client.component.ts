import { Component, OnInit, Input } from '@angular/core';
import Client from '../../services/clientes/lp-Client';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  @Input() displayController: any;
  @Input() cliente: Client;
  @Input() isNewClient: boolean;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  }

  save() {
    if (this.isNewClient) {
      this.clientesService.addClient(this.cliente)
    } else {
      this.clientesService.updateClient(this.cliente)
    }
  }

}
