import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';


const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append( boton );

//*Recibe un obsevable y se ejecuta hasta que ese observable que recibe emita un valor
const counter$  = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap( () => console.log('tap antes de skip') ),
    skip(1),//*Despues del primero emitira valor o pasará el valor al siguiente operador
    tap( () => console.log('tap después de skip') ),
)

counter$.pipe(
    takeUntil( clickBtn$ )
).subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
});











