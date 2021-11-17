import { Component, OnInit } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empleado!: Empleado;

  constructor(
    private _service: ServiceEmpleados,
    private _route: ActivatedRoute
  ) { }

  findEmpleado(idempleado: string): void{
    this._service.findEmpleado(idempleado).subscribe(response => {
      this.empleado = response;
    });
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      var id = params['idempleado'];
      this.findEmpleado(id);
    });
  }
}
