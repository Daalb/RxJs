import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{

    //*Mi solucion
  const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
  }
  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    filter<any>( v => !isNaN(v)),
    reduce<any,number>(totalReducer)


  ).subscribe( console.log ) // La salida debe de ser 32

  //*Solucion Fernando
  const datos2 = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos2).pipe(
    filter<any>( val => !isNaN(val)),
    reduce((acc,curr) => acc+curr)
  ).subscribe( console.log ) // La salida debe de ser 32

})();

		