// // function calc(bYear){
// //   return 2024 - bYear;
// // }
// // const age1= calc(2000);

// // const calc2 = function (bYear){
// //   return 2024-bYear;
// // }
// // const age2=calc2(2000);
// // console.log(age1,age2);

// // const me2 = {
// //   name:"sagar",
// //   age:20,
// //   hobby : ["chess","cricket"],
// // }
// // const friend2 =  Object.assign({},me2);

// // // const UNIQUE=me2.hobby[1];
// // // console.log(UNIQUE);
// // console.log(me2.hobby)
// // me2.hobby[1] = 'bascketball';

// // console.log(friend2.hobby)
// // console.log(window);

// // const options = {
// //   method: "GET",
// //   headers: {
// //     "X-RapidAPI-Key": "fea59b42a6mshb9f647c4f61a6e9p103e06jsn58d4ee27c1e7",
// //     "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
// //   },
// // };

// // var res = fetch(
// //   "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
// //   options
// // )
// //   .then((res) => res.json())
// //   .then((res) => {
// //     for (var data in res) {
// //       console.log(res[data].symbol);
// //     }
// //   })
// //   .catch((err) => console.log(err));

// // // const char={
// // //     name:"abc",
// // //     class:"sample",
// // //     [Symbol("admin")]:false,
// // // }

// // // for (const key of Object.values(char)){
// // //     console.log(key);
// // // }

// // const rest= new Map();
// // rest.set('name','abc');
// // rest.set('namex','abc');
// // rest.set(1,'namex abc');

// // console.log(rest);

// // Circular reference example
// // const obj1 = {
// //         namex:"abc",
// //         class:"sample",
// //         [Symbol("admin")]:false,
// //     }
// // const obj2 = new Object(obj1);
// // const obj3 = new Object(obj1);
// // const obj4 = new Object(obj1);
// // obj1.circularRef = obj2;
// // obj2.circularRef = obj1;

// // console.log(obj1===obj2);

// const secureBooking=function(){
//     let passengerCount=0;
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`)
//     }
// }

// const booker = secureBooking();
// booker();
// booker();
// booker();
// booker();

// console.dir(secureBooking);
// console.dir(booker);

// const arr=[0,2,3,4,5];
// console.log(arr.splice(2,1))
// console.log(arr)

// const x = new Array(7);
// const x= [1, 2, 3, 4, 5, 6, 7];
// x.fill(23, 2, 6);
// console.log(x);

// let invalidArray = Array.from({ length: 3 });
// console.log(invalidArray);

// var validArray = Array.from({ length: 3 }, (_, index) => 2);
// console.log(validArray);

// let originalArray = [[1, 2], [3, 4]];
// let deepCopyArray = JSON.parse(JSON.stringify(originalArray));
// originalArray[0][0] = 99;
// console.log(deepCopyArray);

// Writing Large Numbers
// console.log(1_500)

// console.log(typeof 1_500n)

// console.log(20n=='20')

// Listen for viewport resize events
// Get viewport dimensions
// const viewportWidth = window.innerWidth;
// const viewportHeight = window.innerHeight;
// window.addEventListener('resize', () => {
//     // Handle viewport resize
//     console.log(viewportHeight, viewportWidth);
//   });

// function doSomething() {}
// console.log(doSomething.prototype);
// console.log(doSomething.__proto__);
// // It does not matter how you declare the function; a
// // function in JavaScript will always have a default
// // prototype property — with one exception: an arrow
// // function doesn't have a default prototype property:
// const doSomethingFromArrowFunction = () => {};
// console.log(doSomethingFromArrowFunction.prototype);
// console.log(doSomethingFromArrowFunction.__proto__.__proto__);

let p = new Promise((resolve, reject) => {
  resolve();
});

p.then((message)=>{
    console.log('This is then '+message);
}).catch((message)=>{
console.log('This is then '+message);
})