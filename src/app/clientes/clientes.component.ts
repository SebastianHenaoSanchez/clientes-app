import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'; 
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  paginador: any;
  
  constructor(private clienteService: ClienteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //llamamos el metodo listar cuando se navega hacía este componente
    this.activatedRoute.paramMap.subscribe(params => {
      let page = +params.get('page');
      if (!page) {
        page = 0;
        console.log('no hay paginas en el parametro');
      }
      this.clienteService.getClientesPage(page).subscribe(
        response => {
          
          let clientes = response.content as Cliente[];
          clientes.forEach(cliente => {
            cliente.createAt = formatDate(cliente.createAt, 'EEEE, dd MMMM yyyy', 'es');
          });
          console.log('Clientes:', clientes);
          this.clientes = clientes;
          this.paginador = response;
        });
    });

  }

  delete(cliente: Cliente): void{
    swal.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que deseas liminar al cliente ${cliente.nombre} ${cliente.apellido}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.value) {

        this.clienteService.deleteCliente(cliente.id).subscribe(
          response => {
            
            this.clientes = this.clientes.filter(user => user !== cliente)
            swal.fire(
              'Cliente eliminado!',
              'Cliente eliminado con éxito',
              'success'
            )}
        )}
    })
  }

}
