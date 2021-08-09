import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { WideComponent } from './wide/wide.component';
import { MobileComponent } from './mobile/mobile.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuComponent,
    WideComponent,
    MobileComponent,
    DropMenuComponent
  ],
  imports: [CommonModule, MatIconModule],
  exports: [MenuComponent, DropMenuComponent]
})
export class MenuModule {}
