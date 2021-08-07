import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FeaturedHospitalsComponent } from './featured-hospitals/featured-hospitals.component';
import { SPAPagesComponent } from './spa-pages.component';
import { CardModule } from '../surface/card/card.module';
import { PlanBenefitsComponent } from './plan-benefits/plan-benefits.component';
import { FullListHospitalsComponent } from './full-list-hospitals/full-list-hospitals.component';
import { MatIconModule } from '@angular/material/icon';
import { WantKnowMoreInformationsComponent } from './want-know-more-informations/want-know-more-informations.component';
import { FooterComponent } from './footer/footer.component';
import { WideComponent } from '../surface/card/details/wide/wide.component';
import { HttpClientModule } from '@angular/common/http';
import { FoundationModule } from '../foundation/foundation.module';

@NgModule({
  declarations: [
    SPAPagesComponent,
    HeaderComponent,
    FeaturedHospitalsComponent,
    PlanBenefitsComponent,
    FullListHospitalsComponent,
    WantKnowMoreInformationsComponent,
    FooterComponent,
    WideComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatIconModule,
    HttpClientModule,
    FoundationModule
  ],
  exports: [SPAPagesComponent]
})
export class SpaPagesModule {}
