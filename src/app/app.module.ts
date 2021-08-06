import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './components/navigation/menu/menu.module';
import { SpaPagesModule } from './components/_spa-pages/spa-pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/foundation/action/button/button.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [
    BrowserModule,
    MenuModule,
    SpaPagesModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
