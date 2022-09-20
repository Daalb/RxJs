import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: (resp) => console.log('next con observer: ', resp),
    error: (err) => console.warn('error: con observer ', err), 
    complete: () => console.log('Fin con observer...')
}


//*Observabl<lo que emite>. Recomendable decir que tipo de información fluye dentro del string
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    //Forzando un error
    // const a = undefined;
    // a.nombre = 'Diego';

    subs.complete(); //* Ninguna emición despues de esta línea será notificada a las subscripciones
    subs.next('Hola');
    subs.next('Mundo');
});

//*Para que un observable se ejecute debe tener subscripcion
//obs$.subscribe(console.log)

//*Solo pasando el next
// obs$.subscribe(resp => {
//     console.log(resp)
// })

//*Con los 3 argumentos
// obs$.subscribe({
//     next: (resp) => console.log('next: ', resp), //*Se ejecuta cada que el obs emita un valor
//     error: (err) => console.warn('error: ', err), //*Se ejecuta si sucede un error
//     complete: () => console.log('Fin...') //*Cuando el obs se complete
// })


//*Usando un observer
obs$.subscribe(observer);