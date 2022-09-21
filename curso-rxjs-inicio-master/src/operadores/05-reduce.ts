import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';

//*Se muestra el resultado HASTA que se complete el observable
const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 0 ); 
console.log('total arr', total );

interval(500).pipe(
    take(6), //*Completará el observable cuando se ejecute 3 veces 
    tap( console.log ),
    reduce( totalReducer )//*Es muy similar al reduce de Js
)
.subscribe({
    next: val => console.log('next:', val ),
    complete: () => console.log('Complete')
});





