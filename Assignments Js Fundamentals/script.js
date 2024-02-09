// // LECTURE: let, const and var
// // 1. Set the value of 'language' to the language spoken where you live (some
// // countries have multiple languages, but just choose one)

// let language="HN";

// // 2. Think about which variables should be const variables (which values will never
// // change, and which might change?). Then, change these variables to const.
// const country = 'INDIA';
// const continent="ASIA";
// const isIsland=false;

// // 3. Try to change one of the changed variables now, and observe what happens
// // isIsland=true;
// // variables assigned with const cannot be changed within same block

// // LECTURE: Basic Operators
// // 1. If your country split in half, and each half would contain half the population,
// // then how many people would live in each half?
// let population = 1480e6, half=population/2;
// console.log("People living in each half is ", half);

// // 2. Increase the population of your country by 1 and log the result to the console
// population+=1;
// console.log(population);

// // 3. Finland has a population of 6 million. Does your country have more people than
// // Finland?
// let finPop=6e6;
// console.log(`${population > finPop ?            //condition
//     'yes its more than finlands population':    //if true
//     'no its less than finalds population' }`);  //else

// // 4. The average population of a country is 33 million people. Does your country
// // have less people than the average country?
// console.log(`${population > 33e6 ?            //condition
//     'yes its more than 33M population':    //if true
//     'no its less than 33M population' }`);  //else

// // 5. Based on the variables you created, create a new variable 'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million
// // people speak portuguese
// let description=country + ' is in ' + continent +' and its '+population + ' people speak '+language;
// console.log(description);

// // LECTURE: Strings and Template Literals
// // 1. Recreate the 'description' variable from the last assignment, this time
// // using the template literal syntax
// description= `${country} is in ${continent} and its ${population} people speak ${language}. `
// console.log(description);

// // LECTURE: Taking Decisions: if / else Statements
// // 1. If your country's population is greater that 33 million, log a string like this to the
// // console: 'Portugal's population is above average'. Otherwise, log a string like
// // 'Portugal's population is 22 million below average' (the 22 is the average of 33
// // minus the country's population)
// console.log(`${population < 33e6 ? "Portugal's population is above average": "Portugal's population is " + `${population -33e6}` +" million below average"} `);

// // 2. After checking the result, change the population temporarily to 13 and then to 130.
// // See the different results, and set the population back to original

// // LECTURE: Type Conversion and Coercion

// // 1. Predict the result of these 5 operations without executing them:
// // '9' - '5';  4
// // '19' - '13' + '17'; 417
// // '19' - '13' + 17;   21
// // '123' < 57;   false
// //(5 + 6 + '4' + 9 - 4 - 2);    1143

// // 2. Execute the operations to check if you were right
// // 👍✔

// // LECTURE: Equality Operators: == vs. ===
// // 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// // prompt('How many neighbour countries does your country
// // have?');
// // let neg=prompt('How many neighbour countries does your country have?');
// // console.log(Number(neg));

// // 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// // == for now)
// // if(neg==1){
// //     console.log('Only 1 border');
// // }

// // 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// // is greater than 1
// // else if(neg>1){
// //     console.log('More than 1 border');
// // }

// // 4. Use an else block to log 'No borders' (this block will be executed when
// // 'numNeighbours' is 0 or any other value)
// // else{
// //     console.log('No borders');
// // }

// // 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// // 👍✔

// // 6. Change == to ===, and test the code again, with the same values of
// // 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// // is this happening?

// // if(neg===1){ // comapring a string data type to number
// //     console.log('Only 1 border');
// // }

// // // 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// // // when you input 1
// // if(Number(neg)===1){ //i had to do explicit conversion
// //     console.log('Only 1 border');
// // }

// // 8. Reflect on why we should use the === operator and type conversion in this
// // situation

// //  👉 to prevent conflicting data type errors from user input.

// // LECTURE: Logical Operators
// // 1. Comment out the previous code so the prompt doesn't get in the way
// // ✔

// // 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// // country that speaks english, has less than 50 million people and is not an
// // island.
// const Sarah = {
//   language: "en",
//   population: 40e6,
//   isIsland: false,
// };

// // 3. Write an if statement to help Sarah figure out if your country is right for her.
// // You will need to write a condition that accounts for all of Sarah's criteria. Take
// // your time with this, and check part of the solution if necessary.
// if(language==Sarah.language && population< 50e6 && isIsland){
//  console.log('You should live in Portugal :)');
// }

// // 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// // not, log 'Portugal does not meet your criteria :('
// else{
//  console.log('Portugal does not meet your criteria :(');
// }

// // 5. Probably your country does not meet all the criteria. So go back and temporarily
// // change some variables in order to make the condition true (unless you live in
// // Canada :D)

// // Sure 😀

// // LECTURE: The switch Statement
// // 1. Use a switch statement to log the following string for the given 'language':
// // chinese or mandarin: 'MOST number of native speakers!'
// // spanish: '2nd place in number of native speakers'
// // english: '3rd place'
// // hindi: 'Number 4'
// // arabic: '5th most spoken language'
// // for all other simply log 'Great language too :D'

// language='ssadasd'
// switch(language){
//     case 'chinese' || 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'HN':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }

///////////////////////////////////////////////////////////////////////////////////////////

// SECTION 2

// LECTURE: Functions
// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
// describeCountry('Finland', 6, 'Helsinki');

// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console
// let A = describeCountry('X', 1, 'P');
// let B = describeCountry('Y', 2, 'Q');
// let C = describeCountry('Z', 3, 'R');

// LECTURE: Function Declarations vs. Expressions
// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population
// represents. For example, China has 1441 million people, so it's about 18.2% of
// the world population

function percentageOfWorld1(population) {
  // 2. To calculate the percentage, divide the given 'population' value by 7900
  // and then multiply by 100
  let precentage = (population / 7900) * 100;
  console.log(precentage);
  return precentage;
}

// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
// store the results into variables, and log them to the console
// let A = percentageOfWorld1(1400);
// let B = percentageOfWorld1(1500);
// let C = percentageOfWorld1(110);

// 4. Create a function expression which does the exact same thing, called
// 'percentageOfWorld2', and also call it with 3 country populations (can be
// the same populations)
function percentageOfWorld2(population) {
  let precentage = (population / 7900) * 100;
  console.log(precentage);
  return precentage;
}
// let X = percentageOfWorld2(1400);
// let Y = percentageOfWorld2(1500);
// let Z    = percentageOfWorld2(110);



// LECTURE: Arrow Functions 
// 1. Recreate the last assignment, but this time create an arrow function called 
// 'percentageOfWorld3'
const percentageOfWorld3 = population =>{
  let percentage1=(population/7900)*100;
  return percentage1;
}
console.log(percentageOfWorld3(1100));


// LECTURE: Functions Calling Other Functions 
// 1. Create a function called 'describePopulation'. Use the function type you 
// like the most. This function takes in two arguments: 'country' and 
// 'population', and returns a string like this: 'China has 1441 million people, 
// which is about 18.2% of the world.' 
const describePopulation= (country,population)=>{
  let print = `China has 1441 million people, which is about ${percentageOfWorld1(1441)} % of the world.`
  return print;
}


// 2. To calculate the percentage, 'describePopulation' call the 
// 'percentageOfWorld1' you created earlier 
// 3. Call 'describePopulation' with data for 3 countries of your choice 
console.log(describePopulation());
 
 

// LECTURE: Introduction to Arrays 
// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations' 
let populations=[1441,100,110,500];

// 2. Log to the console whether the array has 4 elements or not (true or false) 
console.log(`${populations.length ==4 ? true:false}`);

// 3. Create an array called 'percentages' containing the percentages of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 percentage values 
 let percentages;
 for(var i in populations){
    percentageOfWorld1(populations[i]);
  }


 

// LECTURE: Basic Array Operations (Methods) 
// 1. Create an array containing all the neighbouring countries of a country of your 
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
// into a variable called 'neighbours' 
let neighbours=['India', 'Russia', 'Bhutan'];

// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
// your selected country. So add it to the end of the 'neighbours' array 
neighbours.push('Utopia');

// 3. Unfortunately, after some time, the new country is dissolved. So remove it from 
// the end of the array 
neighbours.pop();


// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
// console: 'Probably not a central European country :D' 
for(var i in neighbours){
  console.log(`${neighbours[i]=="Germany" ? "True!":"Probably not a central European country :D"}`);
}

// 5. Change the name of one of your neighbouring countries. To do that, find the 
// index of the country in the 'neighbours' array, and then use that index to 
// change the array at that index position. For example, you can search for 
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'
let index= neighbours.indexOf("Russia");
neighbours[index]="The New Russia";
console.log(neighbours);


// LECTURE: Introduction to Objects 
// 1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbours' (an array like we used in previous assignments) 
// const myCountry={
//   country:'INDIA',
//   capital:'New Delhi',
//   language:'HN',
//   population:144e6,
//   neighbours:['China','Bhutan',"Bangladesh"]
// } 
// console.log(myCountry);
 
// // LECTURE: Dot vs. Bracket Notation 
// // 1. Using the object from the previous assignment, log a string like this to the 
// // console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// // and a capital called Helsinki.' 
// console.log(`${myCountry.country} has ${myCountry.population}  ${myCountry.language} speaking people, 
// ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.` )

// // 2. Increase the country's population by two million using dot notation, and then 
// // decrease it by two million using brackets notation. 
// console.log(myCountry.population+2e6);
// console.log(myCountry['population']-2e6);

// LECTURE: Object Methods 
// 1. Add a method called 'describe' to the 'myCountry' object. This method 
// will log a string to the console, similar to the string logged in the previous 
// assignment, but this time using the 'this' keyword. 
const myCountry={
  country:'INDIA',
  capital:'New Delhi',
  language:'HN',
  population:144e6,
  neighbours:['A','B','C'],
  describe: function(){
    console.log(`${this.country} has ${this.population}  ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland:function(){
    let isIsland=`${this.neighbours.length==0?true:false}`
    console.log(isIsland);
  }
} 
// 2. Call the 'describe' method 
myCountry.describe();

// 3. Add a method called 'checkIsland' to the 'myCountry' object. This 
// method will set a new property on the object, called 'isIsland'. 
// 'isIsland' will be true if there are no neighbouring countries, and false if 
// there are. Use the ternary operator to set the property. 
myCountry.checkIsland();


// LECTURE: Iteration: The for Loop 
// 1. There are elections in your country! In a small town, there are only 50 voters. 
// Use a for loop to simulate the 50 people voting, by logging a string like this to 
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
for(let i=1;i<=50;i++){
  console.log(`Voter number ${i} is currently voting`);
}


// LECTURE: Looping Arrays, Breaking and Continuing 
// 1. Let's bring back the 'populations' array from a previous assignment 
// let populations=[1441,100,110,500];

// 2. Use a for loop to compute an array called 'percentages2' containing the 
// percentages of the world population for the 4 population values. Use the 
// function 'percentageOfWorld1' that you created earlier 

// function percentageOfWorld1(population) {
//   // 2. To calculate the percentage, divide the given 'population' value by 7900
//   // and then multiply by 100
//   let precentage = (population / 7900) * 100;
//   console.log(precentage);
//   return precentage;
// }
for(var i in populations){
  let percentages2=percentageOfWorld1(populations[i]);
  console.log("P2: ",percentages2);
}


// 3. Confirm that 'percentages2' contains exactly the same values as the 
// 'percentages' array that we created manually in the previous assignment, 
// and reflect on how much better this solution is 
 
//😀😀 it is same as logging in console, for loop made it easy to implement the iterations.

 

// LECTURE: Looping Backwards and Loops in Loops 
// 1. Store this array of arrays into a variable called 'listOfNeighbours' 
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 
// 'Russia']]; 
let listOfNeighbours=[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// 2. Log only the neighbouring countries to the console, one by one, not the entire 
// arrays. Log a string like 'Neighbour: Canada' for each country 
for (var i in listOfNeighbours){
  for(var j in listOfNeighbours[i])
  console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't 
// worry if it's too difficult for you! But you can still try to figure this out anyway 😉 
 
// 😀 done!! 



// LECTURE: The while Loop 
// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
// but this time using a while loop (call the array 'percentages3') 

// for(var i in populations){
//   let percentages2=percentageOfWorld1(populations[i]);
//   console.log("P2: ",percentages2);
// }
let i=0,percentage3=[];
while(i < populations.length){
  const perc=percentageOfWorld1(populations[i]);
  percentage3=percentage3.push(perc);
  i++;
}
console.log(percentage3);

// 2. Reflect on what solution you like better for this task: the for loop or the while 
// loop?

// ✔👉for loop is better, with less varibles


/////////////////////////////👍END👍///////////////////////////////////