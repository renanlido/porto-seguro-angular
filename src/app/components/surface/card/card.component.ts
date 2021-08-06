import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardDetailsProps } from 'src/_model/CardDetailsProps';
import { CardTypeProps } from 'src/_model/CardTypeProps';

type OpenCardEventEmitter = {
  isOpen: boolean;
  cardDetails: CardDetailsProps | undefined;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public isOpen = false;

  @Input() card: CardTypeProps = {
    id: '',
    imageName: ''
  };

  @Input() isButtonVisible: boolean = false;

  @Output() OpenCardStatusEmitter: EventEmitter<OpenCardEventEmitter> =
    new EventEmitter();

  handleOpen(cardDetails: CardDetailsProps | undefined) {
    this.isOpen = !this.isOpen;

    this.OpenCardStatusEmitter.emit({ isOpen: this.isOpen, cardDetails });
  }
}
