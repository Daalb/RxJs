import { Observable, Observer, Subject } from 'rxjs';

//?Quiero subscribirme a ese observable de tal manera que no importa cuántas subscripciones tenga, el valor del math random debería ser el mismo para todas

const observer: Observer<any> = {
    next : value => console.log('next:', value ),
    error: error => console.warn('error:', error ),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>( subs => {

    const intervalID = setInterval( 
      () => subs.next( Math.random() ), 1000 
    );

    return () => {
        clearInterval( intervalID );
        console.log('Intervalo destruido')
    };

});

/** Subject
 * 1- Casteo múltiple --> Muchas subscribciones están sujetas al mismo observable y distribuye la misma info
 * 2- También es un observer --> Permite mandar como argumento al susbscribe
 * 3- Next, error y complete
 */

const subject$ = new Subject();
const subscription = intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );


setTimeout( () => {

    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500 );

