import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  paises:any =[
    {cercano:1,activo:true,nombre:'Colombia'},
    {cercano:1,activo:true,nombre:'Brazil'},
    {cercano:2,activo:false,nombre:'Argentina'},
    {cercano:3,activo:true,nombre:'Polonia'},
    {cercano:3,activo:true,nombre:'Alemania'},
    {cercano:3,activo:false,nombre:'Francia'},
    {cercano:2,activo:true,nombre:'EU'},
    ]

  getAllPaises(): any {
    return this.paises;
  }

  getPais(nombrePais: string): any {
    return this.paises.find(x => x.nombre == nombrePais);
  }

  updatePais(paisObject: any): any {
    this.paises.forEach((data) => {
      if(data.nombre  == paisObject.nombre) {
        data = paisObject;
      }
    });

  }

  deletePais(pais: string): any {
    this.paises = this.paises.filter(x => x.nombre !== pais);
  }
}
