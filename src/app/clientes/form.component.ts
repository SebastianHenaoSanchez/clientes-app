import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'; 
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private titulo: any = "Crear cliente"
  private cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  public cargarCliente(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params ['id']
      if(id){
        this.clienteService.getCliente(id).subscribe(
          response => {
            this.cliente= response;
          })
      }
    })
  }

  public create():void{
    
    this.clienteService.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']);
        swal.fire('Nuevo Cliente', `Cliente ${response.nombre} creado con éxito!`,'success');

      })
  }

  public update():void{
    this.clienteService.updateCliente(this.cliente).subscribe(
      response =>{
        this.router.navigate(['/clientes']);
        swal.fire('Actualizado', `Cliente ${response.nombre} actualizado con exito`,'success');
      })
  }

  

}
