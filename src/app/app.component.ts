import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Giovanni Gonzalez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();

  persona = {
    nombre: 'Giovanni',
    apellido: 'Gonzalez',
    edad: 26,
    direccion: {
      departamento: 'Guatemala',
      zona: 7
    }
  };

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

}
