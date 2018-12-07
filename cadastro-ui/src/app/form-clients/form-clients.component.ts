import { ClientService } from './../shared/client.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Client } from '../shared/client';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.scss']
})
export class FormClientsComponent implements OnInit, OnDestroy {

  clientForm: FormGroup;

  private client: Client;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit() {

    this.client = this.clientService.getter();

    // ReactiveForm Construction
    this.clientForm = this.formBuilder.group({
      id: [null],
      name: [null],
      surname: [null]
    });

    this.setFormFields();

  }

  onSubmit() {
    // console.log(this.clientForm.value);
    if (this.client.id === undefined) { // post
      this.clientService.addClient(this.clientForm.value)
        .pipe(take(1))
        .subscribe(user => {
          this.clientService.rotaList();
        });
    } else {  // put
      this.clientService.updateClient(this.clientForm.value)
        .pipe(take(1))
        .subscribe(user => {
          this.clientService.rotaList();
        });
    }

  }

  setFormFields() { // To avoid assigning null at onUpdate()
    this.clientForm.patchValue({
      id: this.client.id,
      name: this.client.name,
      surname: this.client.surname
    });
  }

  ngOnDestroy() {
    console.log('Component form destructed');
  }

}
