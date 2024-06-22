let arr = [5,1,3,2,6];

// Double - [10,2,6,4,12]
// triple - [15,3,9,6,18]
// Binary - ["101","1","11","10","110"]


//For double numbers
// function double(x){
//    return x*2; 
// }
// const output = arr.map(double);


//For triple numbers
// const output = arr.map(triple);
// function triple(x){
//     return x*3;
// }


//For binary numbers
function binary(x){
    return x.toString(2);
}
const output = arr.map(binary);
//const output = arr.map((x)=>x.toString(2));
console.log(output);