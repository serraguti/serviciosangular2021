import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios!: Array<string>;
  public empleados!: Array<Empleado>;
  @ViewChild("selectoficio") selectoficio!: ElementRef;

  constructor(private _service: ServiceEmpleados) { }

  mostrarEmpleados(): void{
    var oficio = this.selectoficio.nativeElement.value;
    this._service.getEmpleadosOficio(oficio).subscribe(response => {
      this.empleados = response;
    });
  }

  ngOnInit(): void {
    this._service.getOficios().subscribe(response => {
      this.oficios = response;
    });
  }
}
