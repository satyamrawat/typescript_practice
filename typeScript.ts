const sum = (a: number , b: number) => {
    return a+b;
}

const answer = sum(6,5);
console.log(answer);

let isCool : boolean = true;

let age: number = 13;

var name: string = "Satyam";

var desc: string = `My name is ${name} and ${age} years old`;

let qual: string[] = ['10','12', 'B.Tech'];
// let qual: Array<string> = ['10','12', 'B.Tech'];

for(let i: number =0; i<qual.length; i++){
    console.log(`${i+1}. Qualification :- ${qual[i]}`);
}

let person: object = {
    name: 'Satyam',
    age : 24,
}

let naah: undefined= undefined;

let noo: null = null;

//Tuple
let fullName:[string, string];
fullName = ['Satyam', 'Rawat'];

//Enum
enum Size {Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeNumber : number = Size.Small;

console.log(sizeName);
console.log(sizeNumber);

// Any !!!! Be Careful

let whatever: any = 'ahhhh no wayyyy!!!';
whatever = 5;
whatever = true;

//void
let sing = ():void =>{
    console.log('lalalalalaaa');
    // return 5;
}

//never
let error = ():never =>{
    throw Error('oooppssss')
}

//interface
interface Army{
    count: number,
    type: string,
    name:string
}

let fightArmy = (a: Army)=>{
    console.log('!Fight');
}


//type assertions
let p1 = {} as Army;
console.log(p1.count);


//fucntion

let fightArmy2 = (a: Army): void =>{
    console.log('!Fight');
}

let killOnePerson = (a: Army): number =>{
    console.log('!Kill');
    a.count--;
    return a.count;
}

//Class
class Animal {
    speak:string = '----';

    constructor(sound:string){
        this.speak = sound;
    }

    greet() : string{
        return `Hello ${this.speak}`;
    }
}

let dog = new Animal('Bhaw Bhaw');

console.log(dog.greet());

//Union

let confuse : string | number = "hello";
confuse = 5;


// typescript is smart enough to know the datatypes

export {};