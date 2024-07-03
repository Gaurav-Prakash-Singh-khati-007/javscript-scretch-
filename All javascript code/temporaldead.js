//  var let const are keywords change behavior of ..............variable 
//  variable declare are stored in window obejct where as decalred with let const will be stored into cll stack
// var a is similar to declaring like a; 

// call stack is mechanism used by javascript engine for tracing the function 


// Example 

//console.log(c) //this will give error if used before initialization due to variable declared using let or const
//console.log(b);// this will give undefined because declared with var keywords
// hoistic sending variable declaration devito the variable exection contex top 



// console.log(a)
let a=10;
console.log(a)
let c;
var b =20;
console.log(b);

let callStack=()=>{
    console.log(a,b);


}
callStack()