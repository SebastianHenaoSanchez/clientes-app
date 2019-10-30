import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'; 
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private titulo: any = "Crear cliente"
  private cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
  }

  public create():void{
    console.log("Clicked");
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }

}