import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/Comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {
  public comics!: Array<Comic>;
  public favorito!: Comic;
  @ViewChild("cajatitulo") cajatitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaimagen!: ElementRef;
  @ViewChild("cajadescripcion") cajadescripcion!: ElementRef;

  constructor(private _servicecomics: ComicsService) { 
  }

  ngOnInit(): void {
    this.comics = this._servicecomics.getComics();
  }

  seleccionarFavorito(event: any): void {
    console.log(event['saludo']);
    this.favorito = event['comic'];
  }

  eliminarComic(event: number): void{
    this.comics.splice(event, 1);
  }

  modificarComic(event: number): void{
    var titulo = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    this.comics[event] = new Comic(titulo, imagen, descripcion);
  }

  guardarComic(): void {
    var titulo = this.cajatitulo.nativeElement.value;
    var imagen = this.cajaimagen.nativeElement.value;
    var descripcion = this.cajadescripcion.nativeElement.value;
    var newcomic = new Comic(titulo, imagen, descripcion);
    this.comics.push(newcomic);
  }
}
