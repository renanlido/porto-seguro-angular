import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './action/button/button.component';
import { SeparatorComponent } from './divider/separator/separator.component';
import { DefaultContainerComponent } from './layout/default-container/default-container.component';
import { H1Component } from './typography/h1/h1.component';
import { H2Component } from './typography/h2/h2.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SeparatorComponent,
    DefaultContainerComponent,
    H1Component,
    H2Component
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    SeparatorComponent,
    DefaultContainerComponent,
    H1Component,
    H2Component
  ]
})
export class FoundationModule {}
