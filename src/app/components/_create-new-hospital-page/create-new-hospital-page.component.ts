/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create-new-hospital-page',
  templateUrl: './create-new-hospital-page.component.html',
  styleUrls: ['./create-new-hospital-page.component.scss']
})
export class CreateNewHospitalPageComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private FormBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.form = this.FormBuilder.group({
      name: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80)
        ])
      ],
      image: ['http://placeimg.com/640/480'],
      address: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80)
        ])
      ],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(14)
        ])
      ],
      details: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(80)
        ])
      ],
      createdAt: [new Date()]
    });
  }

  handleSubmit() {
    console.log(this.form.value);

    // const response = this.api.post(this.form.value);

    // if (response) {
    //   this.form.reset();

    //   alert('Hospital salvo com sucesso');
    // } else {
    //   alert('Ocorreu um erro');
    // }
  }
}
