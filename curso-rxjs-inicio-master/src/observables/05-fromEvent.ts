import { fromEvent } from 'rxjs';

//*Crear obsevables con base un eventarger (event.target). Eventos emitidos de un elemento de HTML
/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

const observer = {
    next: val => console.log('next', val )
};

src1$.subscribe( ({ x, y }) => {
    console.log(x,y);
});


src2$.subscribe( evento => {
    console.log( evento.key );
});





