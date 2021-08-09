import { Component, Output, EventEmitter } from '@angular/core';

type EventEmitterProps = {
  isOpen: boolean;
};

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  public isOpen = false;

  @Output() OpenMenuEventEmitter: EventEmitter<EventEmitterProps> =
    new EventEmitter();

  handleOpen() {
    this.isOpen = !this.isOpen;

    this.OpenMenuEventEmitter.emit({ isOpen: this.isOpen });
  }
}
