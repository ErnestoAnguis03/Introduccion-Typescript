//en este caso creamos una funcion que solicita un argumento, con <T> indicamos que la variable que se va manejar
//es generica, luego esto lo indicamos tambien en el argumento y el tipo de dato que va regresar la funcion
// son de tipo T osea, la variable que recibio la funcion
export function whatsMyType<T>(argument: T) :T{
    return argument;

}

//aqui indicamos que los argumentos que vamos a enviar son de tipo string
const amIString = whatsMyType<string>('Hola mundo')
console.log(amIString.split(' '))
export{}