import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

//*Disparar efectos secundarios. Normalmente se usa para saber como va la información en nuestros observables

const numeros$ = range(1,5);


numeros$.pipe(
    tap( x => {
        console.log('antes', x);
        return 100; //* No hace nada
    }),
    map( val => val * 10 ),
    tap({
        next: valor => console.log('después', valor),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe( val => console.log('subs', val ));






