/*
    ===== Código de TypeScript =====
*/

//Creamos una interfaz llamada SuperHero, contiene informacion del heroe, un objeto tipo Addresss
//y un metodo showAddress. A su vez, el atributo address utiliza una interfaz Address
interface SuperHero{
    name: string;
    age: number;
    address: Address;
    showAddress: ()=> string;
}

//Interfaz para los objetos address
interface Address{
    street:string
    country:string
    city:string
}
//Creamos un objeto tipo Superheroe, contiene los datos de Piter Parker
const Piter_Parker: SuperHero = {
    name: 'Spiderman',
    age: 22,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = Piter_Parker.showAddress();
console.log( address );




export {};