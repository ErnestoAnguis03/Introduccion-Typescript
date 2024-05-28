//Creamos una variable llamada name que contiene un string
let name = 'Ernesto';
//Creamos una variable llamada hpPoints donde indicamos que solo puede ser de tipo number
let hpPoints: number = 95;

//Creamos una variable llamada stmPoints donde indicamos que soporta las entradas de tipo number y string
let stmPoints: number | string = 50;


//Creamos una variable donde indicamos que solo soporta el tipo de dato number o una palabra en especial
let classChar: string | 'No seleccionado' = 'Guerrero';

console.log({
    name, hpPoints, stmPoints, classChar
})

export{};