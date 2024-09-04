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
// a();
// b();
// console.log(x);
function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}


// undefined vs not defined  

function a(){
    console.log(b);
}

a();
var b = 10;

{
    // var a = 10;
    // console.log(a);
}
// if(true) console.log(true);

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a); // 10
    // console.log(b); // 20
    // console.log(c); // 30

}
console.log(a); // 10
    // console.log(b); // refrence error
    // console.log(c); // refrence error


    function x(){
        var a = 7;
        function y(){
            console.log(a);
        }
        y();
    }
    // x();


function p(){
    var a = 35;
    function q(){
        console.log(a);
    }
    return q;
}

var z = p();
console.log(z);
