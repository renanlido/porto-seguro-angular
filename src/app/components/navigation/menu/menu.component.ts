import { Component } from '@angular/core';

type EventEmitterProps = {
  isOpen: boolean;
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',

  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public logoNorteASul = 'assets/images/logoNorteASul.png';
  public logoPortoSeguro = 'assets/images/logoPortoSeguro.png';

  public isOpen: boolean = false;

  handleOpen(event: EventEmitterProps) {
    this.isOpen = event.isOpen;
  }
}
