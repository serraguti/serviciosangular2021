import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { ListadoempleadosComponent } from "./components/listadoempleados/listadoempleados.component";
import { DetalleempleadoComponent } from "./components/detalleempleado/detalleempleado.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "listadoempleados", component: ListadoempleadosComponent},
    {path: "detalleempleado/:idempleado", component: DetalleempleadoComponent},
    {path: "empleadosoficio", component: EmpleadosoficioComponent},
    {path: "empleadossalario", component: EmpleadossalarioComponent},
    {path: "personas", component: PersonasapiComponent},
    {path: "comicsinyeccion", component: ComicsinyeccionComponent},
    {path: "libreriacomics", component: LibreriaComponent}
]

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

