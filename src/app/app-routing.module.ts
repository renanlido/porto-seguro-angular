import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewHospitalPageComponent } from './components/_create-new-hospital-page/create-new-hospital-page.component';
import { SPAPagesComponent } from './components/_spa-pages/spa-pages.component';

const routes: Routes = [
  { path: '', component: SPAPagesComponent },
  { path: 'create', component: CreateNewHospitalPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
