import { fromEvent, merge } from 'rxjs';
import { pluck } from 'rxjs/operators';

//*Combina observables
//*Este es el metodo
const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge( 
    keyup$.pipe( pluck('type') ), 
    click$.pipe( pluck('type') )
).subscribe( console.log );



