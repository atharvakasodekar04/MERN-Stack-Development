//Function  Statement OR Function Declaration
function a(){
    console.log("Hello");
}
a();

//Function Expressions
var a = function b(){
    console.log("From b function");
}
//b();   // Error
a();   // output : console
console.log(a);  // output : function


//Anonymous Function
var c = function(){
    console.log("Anonymous function");
}
c();


//Named Function Expression 
var d = function xyz(param1){
    console.log(param1);
}
console.log(d(function (){}));
// Output : f (){}

