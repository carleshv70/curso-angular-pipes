import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = "Carles";
  nombre2 = "carlEs hUix";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: "Peter",
    clave: "Spiderman",
    edad: 18
  };

  valorDePromesa = new Promise((resolve, reject) => {

    setTimeout( () => {
      resolve("Llego la data!");
    }, 3500 )
  });

  fecha = new Date();

}
