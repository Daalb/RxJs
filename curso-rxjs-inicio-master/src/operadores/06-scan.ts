import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

//*El Scan es muy similar al reduce, solo que este si va retornando las cosas que lleva acumulada y no espera hasta el final para retornar una sola cosa

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// }
const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from( numeros ).pipe(
    reduce( totalAcumulador, 0 )
)
.subscribe( console.log );

// Scan
from( numeros ).pipe(
    scan( totalAcumulador, 0 )
)
.subscribe( console.log );

// Redux
interface Usuario {
    id: string,
    autenticado: boolean,
    token?: string,
    edad?: number
 }
 const user: Usuario[] = [
    { id: 'fer', autenticado: false, token: null },
    { id: 'fer', autenticado: true, token: 'ABC' },
    { id: 'fer', autenticado: true, token: 'ABC123' }
 ]
  
 const state$ = from( user ).pipe(
    scan<Usuario, Usuario>(( acc: Usuario, cur: Usuario ) => {
       return { ...acc, ...cur }
    }, user[0])
 )
  
 const id$  = state$.pipe(
    // pluck('id')
 )
  
 id$.subscribe(console.log)

