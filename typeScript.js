"use strict";
exports.__esModule = true;
var sum = function (a, b) {
    return a + b;
};
var answer = sum(6, 5);
console.log(answer);
var isCool = true;
var age = 13;
var name = "Satyam";
var desc = "My name is ".concat(name, " and ").concat(age, " years old");
var qual = ['10', '12', 'B.Tech'];
// let qual: Array<string> = ['10','12', 'B.Tech'];
for (var i = 0; i < qual.length; i++) {
    console.log("".concat(i + 1, ". Qualification :- ").concat(qual[i]));
}
var person = {
    name: 'Satyam',
    age: 24
};
var naah = undefined;
var noo = null;
//Tuple
var fullName;
fullName = ['Satyam', 'Rawat'];
//Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.Small;
console.log(sizeName);
console.log(sizeNumber);
// Any !!!! Be Careful
var whatever = 'ahhhh no wayyyy!!!';
whatever = 5;
whatever = true;
//void
var sing = function () {
    console.log('lalalalalaaa');
    // return 5;
};
//never
var error = function () {
    throw Error('oooppssss');
};
var fightArmy = function (a) {
    console.log('!Fight');
};
//type assertions
var p1 = {};
console.log(p1.count);
//fucntion
var fightArmy2 = function (a) {
    console.log('!Fight');
};
var killOnePerson = function (a) {
    console.log('!Kill');
    a.count--;
    return a.count;
};
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.speak = '----';
        this.speak = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.speak);
    };
    return Animal;
}());
var dog = new Animal('Bhaw Bhaw');
console.log(dog.greet());
