import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { DetailsComponent } from './details/details.component';
import { MobileComponent } from './details/mobile/mobile.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardComponent, DetailsComponent, MobileComponent],
  imports: [CommonModule, MatIconModule],
  exports: [CardComponent]
})
export class CardModule {}
