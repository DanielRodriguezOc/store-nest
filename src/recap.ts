const myName = 'Nicolas';
const myage = 12;
const suma = (a: number, b: number) => {
    return a + b;

}

suma(2, 12)


class Persona {


    constructor(private age: number, private name: string) {}


    getSummary() {
        return `my name is ${this.name}, ${this.age}`;
    }
}

const nicolas = new Persona(22, 'nicolas');

nicolas.getSummary();