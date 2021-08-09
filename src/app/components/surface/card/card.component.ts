import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  HostListener
} from '@angular/core';
import { CardDetailsProps } from 'src/app/_model/CardDetailsProps';
import { CardTypeProps } from 'src/app/_model/CardTypeProps';

type OpenCardEventEmitter = {
  isOpen: boolean;
  cardDetails: CardDetailsProps | undefined;
};

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public innerWidth: any = window.innerWidth;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  public isOpen = false;

  @Input() card: CardTypeProps = {
    id: '',
    imageSrc: ''
  };

  @Input() isButtonVisible: boolean = false;

  @Output() OpenCardStatusEmitter: EventEmitter<OpenCardEventEmitter> =
    new EventEmitter();

  handleOpen(cardDetails: CardDetailsProps | undefined) {
    this.isOpen = !this.isOpen;

    this.OpenCardStatusEmitter.emit({ isOpen: this.isOpen, cardDetails });
  }
}
