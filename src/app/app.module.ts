import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//primeNg Imports
import { TableModule } from "primeng/Table";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { TallerComponent } from "./components/taller/taller.component";
import { ClientesService } from "./services/clientes/clientes.service";
import { AddClientComponent } from "./components/add-client/add-client.component";

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    TallerComponent,
    AddClientComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
