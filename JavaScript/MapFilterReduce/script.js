let arr = [5,1,3,2,6];

// Double - [10,2,6,4,12]
// triple - [15,3,9,6,18]
// Binary - ["101","1","11","10","110"]

//-------------------------------MAP-------------------------------//
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
// function binary(x){
//     return x.toString(2);
// }
// const output = arr.map(binary);
// //const output = arr.map((x)=>x.toString(2));
// console.log(output);


//-------------------------------Filter-------------------------------//
const array = [5,10,3,2,6,8];

//Fiter all odd values
// function oddValues(x){
//     return x%2;
// }
// const output= arr.filter(oddValues);
// console.log("output",output);


//Filter all even values
// const output = array.filter(x => {
//     return x%2==0;
// })
// console.log("output",output);

//Filter all values above 4
// const output = array.filter(x => {
//     return x>=3;
// })
// console.log("output",output);


//-------------------------------Reduce-------------------------------//

//Find Max value(acc is accumulator and curr is current value)
// const output = array.reduce(function(acc,curr){
//     if(curr>acc){
//         acc = curr;
//     }
//     return acc;
// },0)
// console.log("Output",output);


//Find Sum value
// const output = array.reduce(function(acc,curr){
//     return acc = acc + curr;
// },0);
// console.log("Output",output);


//------------------------Few examplses------------------------//

//Find Full name from users list(Array of object)
const users = [
    {fname:'Atharva', lname:'Kasodekar', age:22},
    {fname:'Cristinao', lname:'R.', age:42},
    {fname:'Messi', lname:'L.', age:22},
    {fname:'Neymar', lname:'Jr', age:32}
]

// const output = users.map(x => x.fname +" "+ x.lname);
// console.log(output);


//Find how many users at a particular age
// const ageCount = users.reduce((acc, curr) => {
//     if (acc[curr.age]) {
//       acc[curr.age]++;
//     } else {
//       acc[curr.age] = 1;
//     }
//     return acc;
//   }, {});
// console.log(ageCount);


//Find all users whose age is 22
// const output = users.reduce(function (acc, curr){
//     if(curr.age == 22){
//         return acc+1;
//     }
//     return acc;
// },0);
// console.log(output);


//Find alll users fName whose age is greater than 25
const output = users.filter((x) => x.age > 25).map(x => x.fname);
console.log(output);