import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private ulrEndPoint:string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient, private router: Router) { }

  getClientes(): Observable<Cliente[]>{

    
    return this.http.get<Cliente[]>(this.ulrEndPoint);
  }

  create(cliente: Cliente): Observable<any> {
    return this.http.post<Cliente>(this.ulrEndPoint,cliente,{headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.log(e.error.mensaje);
        swal.fire('Error al crear el cliente', e.error.mensaje, 'error');
        return throwError(e);

      })
    );
  }

  getCliente(id): Observable <Cliente>{
    return this.http.get<Cliente>(`${this.ulrEndPoint}/${id}`).pipe(
      catchError (e => {
        console.error(e.error.mensaje)
        swal.fire('Error al editar', e.error.mensaje, 'error');
        this.router.navigate['/clientes'];
        return throwError(e);
      })
    );
  }

  updateCliente(cliente: Cliente): Observable<any>{
    return this.http.put<Cliente>(`${this.ulrEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.error(e.error.mensaje);
        swal.fire('Error al editar el cliente', e.error.message, 'error');
        return throwError(e);

      })
    );
  }

  deleteCliente(id: number): Observable<Cliente>{

    return this.http.delete<Cliente>(`${this.ulrEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError (e => {
        console.error(e.error.mensaje);
       
        swal.fire('Error al eliminar el cliente', e.error.message, 'error');
        return throwError(e);

      })
    );;
  }
}
