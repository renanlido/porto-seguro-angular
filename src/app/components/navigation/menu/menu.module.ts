import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { WideComponent } from './wide/wide.component';
import { MobileComponent } from './mobile/mobile.component';

@NgModule({
  declarations: [MenuComponent, WideComponent, MobileComponent],
  imports: [CommonModule],
  exports: [MenuComponent]
})
export class MenuModule {}
