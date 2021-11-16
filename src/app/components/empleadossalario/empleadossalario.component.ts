import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleadossalario',
  templateUrl: './empleadossalario.component.html',
  styleUrls: ['./empleadossalario.component.css']
})
export class EmpleadossalarioComponent implements OnInit {
  public empleados!: Array<Empleado>;
  @ViewChild("cajasalario") cajasalario!: ElementRef;

  constructor(private _service: ServiceEmpleados) { }

  ngOnInit(): void {
  }

  mostrarEmpleados(): void {
    var salario = this.cajasalario.nativeElement.value;
    this._service.getEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    });
  }
}
