import { Observable, Observer } from 'rxjs';


const observer: Observer<any> = {
    next: (resp) => console.log('next con observer: ', resp),
    error: (err) => console.warn('error: con observer ', err), 
    complete: () => console.log('Fin con observer...') //*Es diferente al unsubscribe
}


//*Subscripcion y Unsubscribe
const intervalo$ = new Observable<number>(subscriber => {
    let i = 0;
    const interval = setInterval( () => {
        i++;
        subscriber.next(i)
    },1000);


    setTimeout(() => {
        subscriber.complete();
    },4000)

    return () => { //*Se ejecuta cuando se hace el unsuscbribe
        clearInterval(interval);
        console.log('Intérvalo destruido');
    }
})

//*Subscribirse crea una nueva instancia del observable y ejecuta el código que tiene

const subs = intervalo$.subscribe(num => console.log('Num: ', num));
const subs1 = intervalo$.subscribe(num => console.log('Num1: ', num));
const subs2 = intervalo$.subscribe(num => console.log('Num2: ', num));

subs.add( subs1 );
subs.add( subs2 );

setTimeout(() =>{
    subs.unsubscribe();
    // subs1.unsubscribe();
    // subs2.unsubscribe();

    console.log('Completado TimeOut')
},5000)