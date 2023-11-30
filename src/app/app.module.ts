import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarRecetasComponent } from './listar-recetas/listar-recetas.component';
import { RecetasComponent } from './recetas/recetas.component';
import { DetallesRecetasComponent } from './detalles-recetas/detalles-recetas.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListarRecetasComponent,
    RecetasComponent,
    DetallesRecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,FormsModule]
})
export class AppModule { }
