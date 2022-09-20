import { of, range, asyncScheduler, observeOn } from 'rxjs';

//*Crear secuencia de numeros con base a un rango. Por defecto síncrono

// const src$ = of(1,2,3,4,5);
const src$ = range(1,5);
// const src$ = range(1,5).pipe( observeOn(asyncScheduler) ); //* El asyncSchedule transforma el range en asíncrono

console.log('inicio');
src$.subscribe( console.log );
console.log('fin');


