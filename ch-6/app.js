var x = x++;
x = 2;
console.log(x);

var x = 100;
x = --x;
console.log(x);

var x = 50;
var y = x++;
console.log(y, "value of y");
console.log(x, "value of x");

var y = 50;
var z = --y;
// var z = y--;
console.log(z, "value of z");

var newNum = 10;
var newNum = --newNum;
console.log(newNum);

var newNum2 = ++newNum2;
console.log(newNum2);

var ab = 20;
var abc = ++ab;
// var abc = ab++;
alert(abc);