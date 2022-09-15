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
    console.log("".concat(i, ". Qualification :- ").concat(qual[i]));
}
var person = {
    name: 'Satyam',
    age: 24
};
var naah = undefined;
var noo = null;
