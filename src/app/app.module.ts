import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TablaAdopcionesComponent } from './components/tabla-adopciones/tabla-adopciones.component';
import { RefugiosComponent } from './components/refugios/refugios.component';
import { AdopcionesComponent } from './components/adopciones/adopciones.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TablaAdopcionesComponent,
    RefugiosComponent,
    AdopcionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
