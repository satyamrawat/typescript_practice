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

export {};