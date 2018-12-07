import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { FormClientsComponent } from './form-clients/form-clients.component';
import { HomeComponent } from './home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: ListClientsComponent},
  {path: 'form', component: FormClientsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: '**', component: WildcardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
