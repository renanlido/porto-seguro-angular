import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule } from './components/navigation/menu/menu.module';
import { SpaPagesModule } from './components/_spa-pages/spa-pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MenuModule, SpaPagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
