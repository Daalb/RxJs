import { asyncScheduler } from 'rxjs';
//*No crea un observable, crea una subscripción.

// setTimeout (() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar  = () => console.log('Hola Mundo');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Fernando' );


const subs = asyncScheduler.schedule( function(state){ //*No puede ser función flecha

    console.log('state', state);

    this.schedule( state + 1, 1000 );//*Se ejecuta cada segundo despues de la emision
    
}, 3000, 0 );//*El 0 es el estado inicial


// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( ()=> subs.unsubscribe(), 6000 );









