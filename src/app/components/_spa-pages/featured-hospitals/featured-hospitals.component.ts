import { Component, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

type CardData = {
  id: string;
  imageName: string;
  title: string;
  details?: {
    text: string;
    adress: {
      street: string;
      neighborhood: string;
      state: string;
      uf: string;
      cep: string;
    };
    phone?: {
      ddd: string;
      number: string;
    };
  };
};

@Component({
  selector: 'app-featured-hospitals',
  templateUrl: './featured-hospitals.component.html',
  styleUrls: ['./featured-hospitals.component.scss']
})
export class FeaturedHospitalsComponent implements OnInit {
  private data: CardData[] = [];

  // constructor(private data: CardData[]) {
  //   data = [];
  // }

  ngOnInit(): void {
    this.data = [
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
