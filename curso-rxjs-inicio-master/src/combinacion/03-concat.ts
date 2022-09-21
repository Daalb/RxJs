import { interval, concat, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';


//*Se ponen los observables uno tras otro y ejecuta un observable apenas termina el anterior.
//* Es una función, no un operador
const interval$ = interval(1000);

concat(
    interval$.pipe( take(3) ),
    interval$.pipe( take(2) ),
    of(1)
).subscribe( console.log  )


