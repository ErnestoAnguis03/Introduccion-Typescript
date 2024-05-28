//Creamos un vector con strings e indicamos que extrictamente este vector solo puede tener strings.
//Dato curioso: las constantes pesan menos que una variable
const  skills: string[] = ['bash', 'Counter', 'healing'];

//Creamos interface donde indicamos los tipos de dato que puede contener un objeto
interface Character{
    name: string;
    hp:number;
    skills: string[];
    hometown?: string;//Agregar un signo ? es para indicar que esta variable/atributo es opcional y no es obligatorio tenerlo
}

//Creamos un objeto llamado weakwarrior con atributos name, hp y skills[], tambien aplicamos interface Characters
const weakwarrior: Character= {
    name :'Ernesto',
    hp: 100,
    skills: ['Bash' , 'Counter']
}

weakwarrior.hometown = 'Onnet';

console.table(weakwarrior);
export {};