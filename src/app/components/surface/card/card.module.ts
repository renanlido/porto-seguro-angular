import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DetailsComponent } from './details/details.component';
import { MobileComponent } from './details/mobile/mobile.component';
import { WideComponent } from './details/wide/wide.component';

@NgModule({
  declarations: [
    CardComponent,
    DetailsComponent,
    MobileComponent,
    WideComponent
  ],
  imports: [CommonModule],
  exports: [CardComponent]
})
export class CardModule {}
