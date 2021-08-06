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
import { PlanBenefitsComponent } from './plan-benefits/plan-benefits.component';
import { ButtonComponent } from '../foundation/action/button/button.component';
import { FullListHospitalsComponent } from './full-list-hospitals/full-list-hospitals.component';
import { MatIconModule } from '@angular/material/icon';
import { WantKnowMoreInformationsComponent } from './want-know-more-informations/want-know-more-informations.component';
import { FooterComponent } from './footer/footer.component';
import { WideComponent } from '../surface/card/details/wide/wide.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SPAPagesComponent,
    HeaderComponent,
    FeaturedHospitalsComponent,
    H1Component,
    DefaultContainerComponent,
    H2Component,
    SeparatorComponent,
    PlanBenefitsComponent,
    ButtonComponent,
    FullListHospitalsComponent,
    WantKnowMoreInformationsComponent,
    FooterComponent,
    WideComponent
  ],
  imports: [CommonModule, CardModule, MatIconModule, HttpClientModule],
  exports: [SPAPagesComponent]
})
export class SpaPagesModule {}
