//What is Callback function in javascript?
setTimeout(function(){
    console.log("SetTimeOut");
}, 5000);

function x(y){
    console.log("From x function");
    y();
}
x(function y(){
    console.log("From y function");
});
//Output : From x function
//         From y function   
//         SetTimeout


//Creating EventListener in Javascript
// document.getElementById("ClickMe").addEventListener("click", function test() {
//     console.log("Button clicked");
//   });


//Closure along with EventListener
function attachEventListener(){
    let count = 0;
    document.getElementById("ClickMe").addEventListener("click",function test(){
        console.log("Button clicked", ++count);
    });
}
attachEventListener();