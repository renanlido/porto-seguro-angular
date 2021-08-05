import { Component, Input } from '@angular/core';
import { CardTypeProps } from 'src/_model/CardTypeProps';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: CardTypeProps = {
    id: '',
    imageName: ''
  };

  @Input() isButtonVisible: boolean = false;
}
