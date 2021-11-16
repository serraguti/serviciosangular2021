import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comic } from 'src/app/models/Comic';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  @Input() comic!: Comic;
  @Input() index!: number;
  @Output() modificarComic: EventEmitter<any> = new EventEmitter();
  @Output() eliminarComic: EventEmitter<any> = new EventEmitter();
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();

  updateComic(): void{
    this.modificarComic.emit(this.index);
  }

  deleteComic(): void{
    this.eliminarComic.emit(this.index);
  }

  marcarFavorito(): void {
    this.seleccionarFavorito.emit({ comic: this.comic, saludo: "Hola que tal" });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
