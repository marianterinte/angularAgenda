import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared-components/page-not-found/page-not-found.component';
import { MainMenuComponent } from './shared-components/main-menu/main-menu.component';
import { AboutComponent } from './shared-components/about/about.component';
import { HomeComponent } from './shared-components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
