import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardTypeProps } from 'src/_model/CardTypeProps';

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

  @Output() OpenCardStatusEmitter: EventEmitter<boolean> = new EventEmitter();

  handleOpen() {
    this.isOpen = !this.isOpen;

    this.OpenCardStatusEmitter.emit(this.isOpen);
  }
}
