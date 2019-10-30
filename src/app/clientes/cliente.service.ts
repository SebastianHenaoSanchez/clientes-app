import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private ulrEndPoint:string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{

    
    return this.http.get<Cliente[]>(this.ulrEndPoint);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.ulrEndPoint,cliente,{headers: this.httpHeaders});
  }

  getCliente(id): Observable <Cliente>{
    return this.http.get<Cliente>(`${this.ulrEndPoint}/${id}`);
  }

  updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.ulrEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders});
  }

  deleteCliente(id: number): Observable<Cliente>{

    return this.http.delete<Cliente>(`${this.ulrEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
