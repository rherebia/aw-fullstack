import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/vendas', pathMatch: 'full' },
  { path: 'vendas', component: VendasListagemComponent },
  { path: 'vendas/cadastro', component: VendaCadastroComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
