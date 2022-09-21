
import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';


//*Otra manera de hacer peticiones y extraer la data
const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': 'ABC123'
});

obs$.subscribe( data => console.log('data:', data ));


