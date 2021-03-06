import { Injectable } from "@angular/core";
import  {Global} from './../global';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServiceEmpleados{
    constructor(private _http: HttpClient){}

    getEmpleados(): Observable<any>{
        var request = "/api/empleados";
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    findEmpleado(idempleado: string): Observable<any>{
        var request = "/api/empleados/" + idempleado;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    getEmpleadosSalario(salario: string): Observable<any>{
        var request = "/api/Empleados/EmpleadosSalario/" + salario;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    getOficios(): Observable<any>{
        var request = "/api/empleados/oficios";
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }

    getEmpleadosOficio(oficio: string): Observable<any>{
        var request = "api/empleados/empleadosoficio/" + oficio;
        var url = Global.urlapiempleados + request;
        return this._http.get(url);
    }
}
