function calc(bYear){
  return 2024 - bYear;
}
const age1= calc(2000);

const calc2 = function (bYear){
  return 2024-bYear;
}
const age2=calc2(2000);
console.log(age1,age2);









// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "fea59b42a6mshb9f647c4f61a6e9p103e06jsn58d4ee27c1e7",
//     "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
//   },
// };

// var res = fetch(
//   "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%2050",
//   options
// )
//   .then((res) => res.json())
//   .then((res) => {
//     for (var data in res) {
//       console.log(res[data].symbol);
//     }
//   })
//   .catch((err) => console.log(err));

// // const char={
// //     name:"abc",
// //     class:"sample",
// //     [Symbol("admin")]:false,
// // }

// // for (const key of Object.values(char)){
// //     console.log(key);
// // }
