import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>( document, 'click' );
//*Recibir valores mientras la condición se cumple

click$.pipe(
    map( ({ x, y }) => ({x,y}) ),
    // takeWhile( ({ y })=> y <= 150 )
    
    takeWhile( ({ y })=> y <= 150, true )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),
});







