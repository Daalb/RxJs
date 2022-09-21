import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';


//*emite, en un intervalo de tiempo, el ultimo valor emitido
const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(
    sampleTime(2000),
    map( ({ x, y }) => ({ x, y }) ),
).subscribe( console.log );






