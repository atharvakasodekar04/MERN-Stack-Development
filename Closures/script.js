function z(){
    var b = 100;
    function x(){
        var a = 120;
        function y(){
            console.log(a, b);
        }
        a = 100;
        y();
    }
    x();
}
z();

//output  : 100,100


// function x(){
//     var a = 4;
//     function  y(){
//         console.log(a);

//     }
//     return y;

// }
// var z = x();
// console.log(z); //returns a function

// z(); //returns a value inside a function