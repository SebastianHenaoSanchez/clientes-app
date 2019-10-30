import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //Este es el nombre que tambien debe ir en el index.html para poder mostrar este componente
  templateUrl: './app.component.html', //va el codigo html de este componente
  styleUrls: ['./app.component.css'] //va el codigo css de este componente
})
export class AppComponent {
  title = 'Catalogo de productos';


}
