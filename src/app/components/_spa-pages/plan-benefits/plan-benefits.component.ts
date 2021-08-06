import { Component } from '@angular/core';

@Component({
  selector: 'app-plan-benefits',
  templateUrl: './plan-benefits.component.html',
  styleUrls: ['./plan-benefits.component.scss']
})
export class PlanBenefitsComponent {
  public firstCard = {
    id: '1',
    imageName: 'recepcao',
    cardProps: {
      imageHeight: '266px',
      imageWidth: '504px',
      cardMaxWidth: '504px'
    }
  };

  public secondCard = {
    id: '2',
    imageName: 'humanHandInsertCoinPig',
    cardProps: {
      imageHeight: '266px',
      imageWidth: '504px',
      cardMaxWidth: '504px'
    }
  };
}
