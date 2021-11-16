import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders}
from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comics.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { ServicePersonas } from './services/servicepersonas';
import { ServiceEmpleados } from './services/empleado.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, FormsModule, routing
  ],
  providers: [appRoutingProviders,
     ServiceEmpleados, 
     ServicePersonas, 
     ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
