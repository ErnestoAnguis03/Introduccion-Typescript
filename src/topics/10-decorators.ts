function classDecorator (

    constructor: any
){
    return class extends constructor {
        newProperty = 'New property'
        hello = 'override'
    }
}

@classDecorator
class Superclass{

    public property: string= "Hola mundo"


    print(){
        console.log(this.property)
    }

}

const bryan = new Superclass;
console.log(bryan)
export{}