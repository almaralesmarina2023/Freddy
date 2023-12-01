import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetasComponent } from './detalles-recetas/detalles-recetas.component';
import { AppRoutingModule } from './app-routing.module';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarRecetasComponent,
    RecetasComponent,
    DetallesRecetasComponent,
    QuienesSomosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

