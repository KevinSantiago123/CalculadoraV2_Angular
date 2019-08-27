import { Component } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  lat: number = 4.667967;
  lng: number =  -74.103692;

  title = 'modulo-calculadora';
  var1 = 10;
  var2 = 30;
  deshabilitado=true;
  nombre:string = '';
  dato:number;
  dato2:number;
  resultado:number;

  constructor(){
    setTimeout(() => {
      this.deshabilitado=false;
    },3000)
  }
  ejecutar(){
    alert("Realizando operación...")
  }
  limpiar(){
    this.dato=null
    this.dato2=null
    this.resultado=null;
  }
  sumar(){
    if (this.dato ==null || this.dato2 ==null){
      alert("Ingrese los valores de forma correcta por favor.")
      this.dato=null
      this.dato2=null
      this.resultado=null;
    }
    else{
      this.resultado=this.dato+this.dato2;
    }
    
  }
  restar(){
    if (this.dato ==null || this.dato2 ==null){
    alert("Ingrese los valores de forma correcta por favor.")
    this.dato=null
    this.dato2=null
    this.resultado=null;
  }
  else{
    this.resultado=this.dato-this.dato2;
  }
  }
  multiplicar(){
    if (this.dato ==null || this.dato2 ==null){
      alert("Ingrese los valores de forma correcta por favor.")
      this.dato=null
      this.dato2=null
      this.resultado=null;
    }
    else{
      this.resultado=this.dato*this.dato2;
    }
  }
  dividir(){
    if (this.dato ==null || this.dato2 ==null){
      alert("Ingrese los valores de forma correcta por favor.")
      this.dato=null
      this.dato2=null
      this.resultado=null;
    }
    else{
      if (this.dato2 ==0){
      alert("No se puede dividir por cero el resultado es infinito.")
      alert("Intente nuevamente.")
      this.dato=null
      this.dato2=null;
    } 
    else{
      this.resultado=this.dato/this.dato2;
    }
  }
    
  }
  modulo(){
    if (this.dato ==null || this.dato2 ==null){
      alert("Ingrese los valores de forma correcta por favor.")
      this.dato=null
      this.dato2=null
      this.resultado=null;
    }
    else{
      if (this.dato2 ==0){
      alert("No se puede hallar modulo con cero el resultado es infinito.")
      alert("Intente nuevamente.")
      this.dato=null
      this.dato2=null;
    } 
    else{
      this.resultado=this.dato%this.dato2;
    }
  }
  }

  
  paises:any =[
    {cercano:1,activo:true,nombre:'Colombia'},
    {cercano:1,activo:true,nombre:'Brazil'},
    {cercano:2,activo:false,nombre:'Argentina'},
    {cercano:3,activo:true,nombre:'Polonia'},
    {cercano:3,activo:true,nombre:'Alemania'},
    {cercano:3,activo:false,nombre:'Francia'},
    {cercano:2,activo:true,nombre:'EU'},
    ]
  

  /*
 paises:any =[
  {cercano:1,nombre:'Colombia'},
  {cercano:1,nombre:'Brazil'},
  {cercano:2,nombre:'Argentina'},
  {cercano:3,nombre:'Polonia'},
  {cercano:3,nombre:'Alemania'},
  {cercano:3,nombre:'Francia'},
  {cercano:2,nombre:'EU'},
  ]
*/
  
}
