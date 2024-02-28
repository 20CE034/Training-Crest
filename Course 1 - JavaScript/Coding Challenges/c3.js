// Coding Challenge #3 


// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy! 
// Your tasks: 
// 1. Calculate the average score for each team, using the test data below 
// let d1=96, d2=108, d3=89, k1=88, k2=91, k3=110;
// avgD= (d1+d2+d3)/3;
// avgK= (k1+k2+k3)/3;


// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score) 
// if(avgD>avgK){
//     console.log('Team Dolphin wins');
// }
// else if (avgD==avgK){
//     console.log('Its a Tie!');
// }
// else{
//     console.log('Team Koalas wins');
// }


// 3. 🧠 Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 

// 4.  🧠 Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy 


let d1=97, d2=112, d3=101, k1=109, k2=95, k3=123;
avgD= (d1+d2+d3)/3;
avgK= (k1+k2+k3)/3;
console.log(avgD);
console.log(avgK);

let req= avgD>=100 && avgK>=100;
if( req && (avgD>avgK)){
    console.log('Team Dolphin wins');
}
else if(req && (avgD<avgK)){
    console.log('Team Koalas wins');
}
else{
    console.log('Its a Tie!');
}


// Test data: 
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106