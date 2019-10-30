import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  listaLenguajes: string[] = ['typescript', 'javascript', 'C++', 'C#', 'PHP'];
  habilitar: any = true;

  constructor() { }

  
}
