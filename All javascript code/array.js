// let arr = [50, 10, 20, 30, 65, 95, 40];
// console.log(arr.pop());
// console.log(arr.push(10));
// console.log(arr);

// console.log(arr.slice(1, 2));
// console.log(arr.splice(2, 1)); // splice syntax splice(starting index,number of elements need to rempve)
// console.log(arr.indexOf(10)); //index of if not will return -1 else will give index of element
// console.log(arr.includes(10));
// console.log(arr.reverse());

// console.log(
//   arr.sort((a, b) => {
//     return a - b;
//   })
// ); // by default will give ascending but will provide wrong

/// sort array without inbuilt function

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

let arr = [50, 10, 20, 30, 65, 95, 40];
// arr.forEach(accepet callback function)
// sum = 0;
// arr.forEach((value, index, arr) => {
//   //   console.log(value, "INDEX VALUE", index);
//   // //   console.log(arr);
//   sum += value;
// });
// console.log(sum);

// let newarr = [];

// arr.forEach((val, i) => {
//   newarr.push(val * val);
// });
// console.log(newarr);

let arra = [
  { name: "GAURAV", age: 20 },
  { name: "Mayank", age: 21 },
  { name: "shivam ", age: 25 },
  { name: "himanshi", age: 10 },
];
// console.log(arra[1].name);
// console.log(arra[3].age);
arra.forEach((val, ind) => {
  console.log(`My name is ${val.name} and my age is ${val.age}`);
});
