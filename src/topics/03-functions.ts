//Creando una funcion (JS, TS)), llamada addNumbres, se indica que necesita 2 parametros (a, b)
//En lenguaje JS y TS es importante indicar que tipo de dato son los parametros o por lo menos indicar :Any
//en caso de ser un tipo de dato cualquiera.
function addNumbers(a: number, b: number):number{


    return a + b;
}

//Creamos una funcion pero con diferente sintaxis, las dos son correctas, aqui se utiliza =>
const addNumbersArrow = (a: number, b:number):string =>{

    return 'hola';
}
//La función al devolver un tipo de dato entero, esta variable no la puede recibir porque espera un string
//por lo que se utiliza una función para convertirlo a string
const datoNumerico: string = addNumbers(1, 2).toString();

console.log(addNumbers(4, 2));

function multiply (numero1: number, numero2?:number, base = 2):number{

    return numero1*base
}

console.log(multiply(5))
export {}