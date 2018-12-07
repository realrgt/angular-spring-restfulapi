import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormClientsComponent } from './form-clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormClientsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormClientsModule { }
