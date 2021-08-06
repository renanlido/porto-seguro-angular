import { Component, Input } from '@angular/core';
import { CardDetailsProps } from 'src/_model/CardDetailsProps';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent {
  @Input() details: CardDetailsProps | undefined = {
    text: '',
    adress: {
      cep: '',
      neighborhood: '',
      state: '',
      street: '',
      uf: ''
    }
  };

  @Input() isOpen: boolean = false;
}
