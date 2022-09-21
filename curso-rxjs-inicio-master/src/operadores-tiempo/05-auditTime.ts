import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


//*Emitir el ultimo valor que ha sido emitido por el observable en un periodo de tiempo determinado

const click$ = fromEvent<MouseEvent>( document, 'click');



click$.pipe(
    map( ({ x }) => x ),
    tap(val => console.log('tap', val) ),
    auditTime(5000)
).subscribe( console.log );


