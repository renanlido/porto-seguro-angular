import { Component, OnInit } from '@angular/core';
import { CardTypeProps } from 'src/_model/CardTypeProps';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-spa-pages',
  templateUrl: './spa-pages.component.html',
  styleUrls: ['./spa-pages.component.scss']
})
export class SPAPagesComponent implements OnInit {
  public cardData: CardTypeProps[] = [];

  ngOnInit(): void {
    this.cardData = [
      {
        id: uuid(),
        imageName: 'vitoriaBarra',
        title: 'Hospital Vitória Barra',
        details: {
          text: 'O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
          adress: {
            street: 'Av. Jorge Curi, 550',
            neighborhood: 'Barra da Tijuca',
            state: 'Rio de Janeiro',
            uf: 'RJ',
            cep: '22775-001'
          },
          phone: {
            ddd: '21',
            number: '3263-2000'
          }
        }
      },
      {
        id: uuid(),
        imageName: 'laranjeiras',
        title: 'Hospital Perinatal Laranjeiras',
        details: {
          text: '1O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
          adress: {
            street: 'Av. Jorge Curi, 550',
            neighborhood: 'Barra da Tijuca',
            state: 'Rio de Janeiro',
            uf: 'RJ',
            cep: '22775-001'
          },
          phone: {
            ddd: '21',
            number: '3263-2000'
          }
        }
      },
      {
        id: uuid(),
        imageName: 'copa_dor',
        title: "Hospital Copa D'Or",
        details: {
          text: '2O Complexo Pediátrico do Hospital Vitória conta com uma equipe de pronto atendimento formada por <b>pediatras, cirurgiões e ortopedistas</b>, além de profissionais de diversas subespecialidades da pediatria, capacitados para assistência a urgências e emergências de pacientes recém-nascidos e até os 18 anos de idade.',
          adress: {
            street: 'Av. Jorge Curi, 550',
            neighborhood: 'Barra da Tijuca',
            state: 'Rio de Janeiro',
            uf: 'RJ',
            cep: '22775-001'
          },
          phone: {
            ddd: '21',
            number: '3263-2000'
          }
        }
      }
    ];
  }
}
