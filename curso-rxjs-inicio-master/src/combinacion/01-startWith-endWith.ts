import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


//*Emision antes de que el observable haga una emisión (sincrona o asíncrona)
const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z'),//*Antes de que se mande la emisión de complete
);



numeros$.subscribe( console.log );



