//creas interfaz pasajero con 3 atributos, uno de ellos es no-obligatorio
interface Passenger{
    name: string;
    newClient:boolean ;
    children?: string[];
}

//Creas un objeto con la interfaz de pasajero, solo agregas 2 atributos
const passenger1 :Passenger = {
    name : 'Ernesto',
    newClient: false
}

const passenger2 :Passenger = {
    name : 'Albertina',
    newClient: false,
    children : ['Alberto', 'Adialberto', 'Gonzalo']
}

const printChildren = (passenger1:Passenger)=>{
    const howManyChildren=passenger1.children?.length; 
    console.log (howManyChildren)
}

printChildren(passenger2)
export{}