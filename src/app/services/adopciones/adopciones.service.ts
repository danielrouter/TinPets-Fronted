import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdopcionesService {

  constructor(private http: HttpClient) { }

  public obtenerAdopciones(){
    const url: ´${environment.apiUrl}/obtenerAdopcion´
    this.http.get('http://localhost:3000/adopciones')
  }
  public obtenerAdopcion(id: number){}
  public agregarAdopcion(adopcion: any){}
  public actuaalizarAdopcion(adopcion: any, id: number){}
  public elimininarAdopcion(id: number){}
}
