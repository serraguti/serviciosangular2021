import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LibreriaComponent } from "./components/libreria/libreria.component";

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "libreriacomics", component: LibreriaComponent}
]

export const appRoutingProviders: any[] = [];
export const routing : ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);

