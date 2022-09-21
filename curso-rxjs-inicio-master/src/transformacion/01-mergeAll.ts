import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck, mergeAll, tap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';

import { GithubUser } from '../interfaces/github-user.interface';
import { GithubUsersResp } from '../interfaces/github-users.interface';

//*Merge para trabajar con observables que internamente emiten otros observables
//*Combina las salidas de observables que emiten observables
// Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {
    
    console.log(usuarios);
    orderList.innerHTML = '';

    for( const usuario of usuarios ) {

        const li  = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login + ' ' );
        li.append( anchor );

        orderList.append(li);
    }

}



// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    // pluck<KeyboardEvent, string>('target', 'value'),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    map<string, Observable<any>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)),
    mergeAll(),
    tap(s => {console.log(s)})
    // map<any, GithubUser[]>(evento => evento.target['value']),/

)
.subscribe(resp => {
    console.log(resp)
});


// input$.pipe(
//     debounceTime<KeyboardEvent>(500),
//     pluck<KeyboardEvent, string>('target','value'),
//     map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON(
//         `https://api.github.com/search/users?q=${ texto }`
//     )),
//     mergeAll<GithubUsersResp>(),
//     pluck<GithubUsersResp, GithubUser[]>('items')
// ).subscribe( mostrarUsuarios );

