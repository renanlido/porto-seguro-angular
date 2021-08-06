import { Component, Input } from '@angular/core';
import { CardDetailsProps } from 'src/app/_model/CardDetailsProps';

@Component({
  selector: 'app-card-details-wide',
  templateUrl: './wide.component.html',
  styleUrls: ['./wide.component.scss']
})
export class WideComponent {
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
}
