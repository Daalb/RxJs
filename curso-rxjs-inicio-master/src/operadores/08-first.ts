import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );

//*Si solo se llama el operador first() sin nada tomará el primer valor y completa el observable.
//* Se le pueden pasar condiciones para que terminé con el primero que cumpla la condición

click$.pipe(
    tap<MouseEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) )
    map( ({ clientX, clientY }) => ({ clientY,clientX }) ),

    first( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});





