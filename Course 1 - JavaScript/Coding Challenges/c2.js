const mark={
    mass:78,
    height:1.69,
};
const john={
    mass:92,
    height:1.95,
};
let mBMI = mark.mass / (mark.height * mark.height),jBMI = john.mass / (john.height * john.height);
let markHigherBMI =  mBMI>jBMI;
console.log(mBMI,jBMI,markHigherBMI);





// CHALLENGE #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:
// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".
console.log(`${ mBMI>jBMI ? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"}`);


// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.

console.log(`${ mBMI>jBMI ? 
    "Mark's BMI (" + `${mBMI}` + ") is higher than John's ("+ `${jBMI}`+ ")!" : 
    "John's BMI (29.1) is higher than Mark's (27)!"}`)

// 👋 OPTIONAL: You can watch my solution in video format in the next lecture
// IMPORTANT: The ** operator is not supported in this editor. 
// Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).