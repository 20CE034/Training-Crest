// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)

let language="HN";


// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
const country = 'INDIA';
const continent="ASIA";
const isIsland=false;

// 3. Try to change one of the changed variables now, and observe what happens
// isIsland=true;
// variables assigned with const cannot be changed within same block


// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
let population = 1480e6, half=population/2;
console.log("People living in each half is ", half);


// 2. Increase the population of your country by 1 and log the result to the console
population+=1;
console.log(population);


// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
let finPop=6e6;
console.log(`${population > finPop ?            //condition
    'yes its more than finlands population':    //if true
    'no its less than finalds population' }`);  //else


// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
console.log(`${population > 33e6 ?            //condition
    'yes its more than 33M population':    //if true
    'no its less than 33M population' }`);  //else


// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese
let description=country + ' is in ' + continent +' and its '+population + ' people speak '+language;
console.log(description);


// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax
description= `${country} is in ${continent} and its ${population} people speak ${language}. `
console.log(description);

// LECTURE: Taking Decisions: if / else Statements 
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population) 
console.log(`${population < 33e6 ? "Portugal's population is above average": "Portugal's population is " + `${population -33e6}` +" million below average"} `);

// 2. After checking the result, change the population temporarily to 13 and then to 130.
// See the different results, and set the population back to original




// LECTURE: Type Conversion and Coercion 

// 1. Predict the result of these 5 operations without executing them: 
// '9' - '5';  4
// '19' - '13' + '17'; 417  
// '19' - '13' + 17;   21
// '123' < 57;   false
//(5 + 6 + '4' + 9 - 4 - 2);    1143

// 2. Execute the operations to check if you were right
// 👍✔



// LECTURE: Equality Operators: == vs. === 
// 1. Declare a variable 'numNeighbours' based on a prompt input like this: 
// prompt('How many neighbour countries does your country 
// have?'); 
let neg=prompt('How many neighbour countries does your country have?'); 
console.log(Number(neg));

// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
// == for now) 
// if(neg==1){
//     console.log('Only 1 border');
// }

// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours' 
// is greater than 1 
// else if(neg>1){
//     console.log('More than 1 border');
// }

// 4. Use an else block to log 'No borders' (this block will be executed when 
// 'numNeighbours' is 0 or any other value) 
// else{
//     console.log('No borders');
// }


// 5. Test the code with different values of 'numNeighbours', including 1 and 0. 
// 👍✔

// 6. Change == to ===, and test the code again, with the same values of 
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
// is this happening? 

if(neg===1){ // comapring a string data type to number
    console.log('Only 1 border');
}


// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
// when you input 1 
if(Number(neg)===1){ //i had to do explicit conversion
    console.log('Only 1 border');
}


// 8. Reflect on why we should use the === operator and type conversion in this
// situation

//  👉 to prevent conflicting data type errors from user input.

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// ✔

// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
const Sarah = {
  language: "en",
  population: 40e6,
  isIsland: false,
};

// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
if(language==Sarah.language && population< 50e6 && isIsland){
 console.log('You should live in Portugal :)');
}

// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
else{
 console.log('Portugal does not meet your criteria :(');
}


// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// Sure 😀


// LECTURE: The switch Statement 
// 1. Use a switch statement to log the following string for the given 'language': 
// chinese or mandarin: 'MOST number of native speakers!' 
// spanish: '2nd place in number of native speakers' 
// english: '3rd place' 
// hindi: 'Number 4' 
// arabic: '5th most spoken language' 
// for all other simply log 'Great language too :D'














