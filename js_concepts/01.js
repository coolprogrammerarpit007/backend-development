`use strict`;


// getName();  // will print Namastey Javascript
// console.log(x); // will print undefined

// console.log(getName);
var x = 7;
// getName1();
// console.log(getName1);
// console.log(getName2);

var getName1 = ()=>{
    console.log('test 2');
}
var getName2 = function(){
    console.log('test 2');
}
function getName(){
    console.log(`Namastey Javascript`);
}

// getName();
// console.log(x);

// console.log(getName);

var x = 1;
a();
b();
console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}