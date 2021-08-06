import { Component, Input } from '@angular/core';
import { CardDetailsProps } from 'src/_model/CardDetailsProps';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
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
