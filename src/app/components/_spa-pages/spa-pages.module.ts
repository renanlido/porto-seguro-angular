import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FeaturedHospitalsComponent } from './featured-hospitals/featured-hospitals.component';
import { SPAPagesComponent } from './spa-pages.component';
import { H1Component } from '../foundation/typography/h1/h1.component';
import { DefaultContainerComponent } from '../foundation/layout/default-container/default-container.component';
import { H2Component } from '../foundation/typography/h2/h2.component';
import { SeparatorComponent } from '../foundation/divider/separator/separator.component';
import { CardModule } from '../surface/card/card.module';

@NgModule({
  declarations: [
    SPAPagesComponent,
    HeaderComponent,
    FeaturedHospitalsComponent,
    H1Component,
    DefaultContainerComponent,
    H2Component,
    SeparatorComponent
  ],
  imports: [CommonModule, CardModule],
  exports: [SPAPagesComponent]
})
export class SpaPagesModule {}
