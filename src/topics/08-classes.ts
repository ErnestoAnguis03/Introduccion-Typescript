//Se crea una clase con dos atributos y su respectivo constructor, el constructor
//se ejecuta al instanciar la clase declarando las variables indicadas
//Esta clase se esta exportando al publico y sus atributos son publicos
export class Person{
    public name: string;
    public address: string;

    constructor(name:string, address:string) {
        //Tambien se puede declarar variables dentro del constructor 
        // public name: string = name;
        //public address: string= address;
        this.name = name;
        this.address = address

    }
}

export class Hero extends Person {
    constructor(
       public realName: string,
       public alterEgo: string,
       public age: number,
       public address:string
    ){
        super(realName, address)
    }

}
alert('Este programa te permite registrar y mostrar un heroe')
let name:string  = prompt('Ingresa tu nombre de heroe');

let alterEgo:string  = prompt('Ingresa el AlterEgo del heroe');

let address:string = prompt('Ingresa la dirección de tu heroe');

let age: number = prompt('Ingresa la edad del heroe')
const Heroe = new Hero(name, alterEgo, age, address);


console.log(Heroe);