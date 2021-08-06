/* eslint-disable no-useless-constructor */
import { Component } from '@angular/core';
import { CardTypeProps } from 'src/_model/CardTypeProps';
import { responseData } from 'src/_model/responseData';
// import { v4 as uuid } from 'uuid';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-spa-pages',
  templateUrl: './spa-pages.component.html',
  styleUrls: ['./spa-pages.component.scss']
})
export class SPAPagesComponent {
  public hospitals: responseData[] = [];

  public cardData: CardTypeProps[] = [];

  constructor(private api: ApiService) {
    this.getAllHospitals();
  }

  getAllHospitals() {
    this.api.getAllHospitals().subscribe(data => {
      this.hospitals = data;

      this.hospitals.map(hospital =>
        this.cardData.push({
          id: hospital.id,
          imageSrc: hospital.image,
          title: hospital.name,
          details: {
            text: hospital.detail,
            adress: {
              street: hospital.address,
              neighborhood: 'Barra da Tijuca',
              state: 'Rio de Janeiro',
              uf: 'RJ',
              cep: '22775-001'
            },
            phone: {
              ddd: '21',
              number: hospital.phone
            }
          }
        })
      );
    });
  }
}
