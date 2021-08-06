import { Component, Input } from '@angular/core';
import { CardDetailsProps } from 'src/_model/CardDetailsProps';
import { CardTypeProps } from 'src/_model/CardTypeProps';

type OpenCardEventEmitter = {
  isOpen: boolean;
  cardDetails: CardDetailsProps | undefined;
};

@Component({
  selector: 'app-featured-hospitals',
  templateUrl: './featured-hospitals.component.html',
  styleUrls: ['./featured-hospitals.component.scss']
})
export class FeaturedHospitalsComponent {
  @Input() cardData: CardTypeProps[] = [];

  public cardDetails: CardDetailsProps | undefined = {
    text: '',
    adress: {
      cep: '',
      neighborhood: '',
      state: '',
      street: '',
      uf: ''
    }
  };

  public isButtonVisible = true;

  public isCardDetailsOpen = false;

  handleCardDetailsOpen(event: OpenCardEventEmitter) {
    this.isCardDetailsOpen = event.isOpen;
    this.cardDetails = event.cardDetails;
  }
}
