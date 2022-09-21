import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

//*Usa dos observables y se dispara despues de que el primer observable emita algun valor
const interval$ = interval(500);
const click$    = fromEvent( document, 'click' );



interval$.pipe(
    sample(click$)
).subscribe( console.log );




