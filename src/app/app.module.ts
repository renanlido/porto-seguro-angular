import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './components/navigation/menu/menu.module';
import { SpaPagesModule } from './components/_spa-pages/spa-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CreateNewHospitalModule } from './components/_create-new-hospital-page/create-new-hospital.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MenuModule,
    SpaPagesModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    CreateNewHospitalModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
