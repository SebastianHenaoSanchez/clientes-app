import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  //@Input es para hacer inyección de dependencias, en este caso para traerse el paginador(numero de paginas) de la clase cliente.component.ts
  @Input() paginador: any;

  paginas: number[];

  constructor() { }

  ngOnInit() {
    this.paginas = new Array(this.paginador.totalPages).fill(0).map((_valor, indice) => indice + 1);
    console.log('paginas:', this.paginador.totalPages );
  }

}
