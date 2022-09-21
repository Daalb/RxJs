import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

//*Emitirá valores que no han sido emitidios. Si emito 1 y luego le sigue otro 1, ese 1 no se emite

const numeros$ = of(1,'1',1,3,3,2,2,4,4,5,3,1, '1' );

numeros$.pipe(
    distinct() // Utiliza ===
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from( personajes ).pipe(
    distinct( p => p.nombre )
).subscribe( console.log );



