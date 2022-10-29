import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { TableauComponent } from './tableau/tableau.component';
import { PortalComponent } from './portal/portal.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScrollDirective } from './scroll.directive';
import {GoogleMapsModule} from '@angular/google-maps';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NosotrosComponent,
    ServiciosComponent,
    TableauComponent,
    PortalComponent,
    BlogComponent,
    ContactoComponent,
    NavbarComponent,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
