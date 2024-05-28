//Se crea una clase con dos atributos y su respectivo constructor, el constructor
//se ejecuta al instanciar la clase declarando las variables indicadas
//Esta clase se esta exportando al publico y sus atributos son publicos
export class Person{
    public name: string;
    public address: string;

    constructor(name:string, address:string) {
        this.name = name;
        this.address = address

    }
}

//Manera de heredar de otra clase, "extends"
// export class Hero extends Person {
//     constructor(
//        public realName: string,
//        public alterEgo: string,
//        public age: number,
//        public address:string
//     ){
//         super(realName, address)
//     }

// }
export class Hero{
    constructor(
        public alterEgo: string,
        public age: number,
        public person: Person,
    ){
    }

}
alert('Este programa te permite registrar y mostrar un heroe')
let name:string  = prompt('Ingresa tu nombre del humano');

let alterEgo:string  = prompt('Ingresa el AlterEgo del heroe');

let address:string = prompt('Ingresa la dirección de tu heroe');

let age: number = prompt('Ingresa la edad del heroe')

const humano = new Person(name, address)
const Heroe = new Hero(alterEgo, age, humano);


console.log(Heroe);