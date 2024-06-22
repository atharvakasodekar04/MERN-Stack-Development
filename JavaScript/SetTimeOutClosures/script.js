// Normal setTimeout

// function x(){
//     var i = 10;
//     setTimeout(function(){
//         console.log(i);
//     }, 5000);
//     console.log('Hustle');
// }
// x();

//OUTPUT : Hustle  
//          10



// Function with setTimeout and closure

//WITH : Var Approach 
// function x(){
//     for(var i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i* 1000);
//     }
//     console.log('Hustle');
// }
// x();
//OUTPUT : Hustle  
//          6 6 6 6 6    //---> But still cant do this because of var as it updates the single variable everytime

//WITH : Var Approach but in new aproach of closure
function x(){
    for(var i=1;i<=5;i++){

        function close(x){
            setTimeout(function(){
                console.log(x);
            },x* 1000);
        }
        close(i);
    }
    console.log('Hustle');
}
x();



//WITH : LET approach as it makes a new stage for each variable
// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i* 1000);
//     }

//     console.log('Hustle');
// }
    
// x();
//OUTPUT : Hustle
//         1 2 3 4 5