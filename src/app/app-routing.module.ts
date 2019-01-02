import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TallerComponent } from './components/taller/taller.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent },
  {path: 'taller', component: TallerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
