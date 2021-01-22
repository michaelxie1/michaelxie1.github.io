
// class challenge averages


// There are two teams, Nets and Knicks.They compete against each other 3 times.
// The team with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console.Don't forget that there can be a draw, so test for that
// as well(draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points.Hint: Use a logical operator to test for minimum
// score, as well as multiple else -if blocks.
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points.Otherwise, no team wins the trophy
// Test data:
// § Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110

// § Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
// § Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106


let netsAverage = (96+108+89)/ 3;
let knicksAverage = (99+91+110) / 3;
if (netsAverage > knicksAverage && netsAverage >= 100){
    console.log(`Nets win the trophy with an average score of ${netsAverage}`)
} else if (knicksAverage > netsAverage && knicksAverage >= 100){
    console.log(`Knicks win the trophy with an average score of ${knicksAverage}`)
} else if (netsAverage === knicksAverage 
    && netsAverage >= 100){ //triple equal, type and value, double equal only value
    console.log("Both teams have tied. They both get trophies");
}else{
    console.log("No team wins a trophy");
}

/*else if (netsAverage === knicksAverage){
    console.log("Neither team wins a trophy, they have tied.")
}*/


// Part B:
let tip;
const bill_value = parseInt(prompt("Please enter the final bill cost: "));
let total;
switch(true){
    case(bill_value >= 30 && bill_value <= 300):
        tip  = bill_value * .15;
        total = bill_value + tip;
        console.log(`The bill was ${bill_value}, the tip was ${tip}, `+
        `the total is ${total}`);
        break;
    case(bill_value <= 0):
        console.log("You entered an invalid amount.");
        break;
    default: {
        tip  = bill_value * .2;
        total = bill_value + tip;
        console.log(`The bill was ${bill_value}, the tip was ${tip}, `+
        `the total is ${total}`);
        break;
    }   
}

function celsiusToFarenheit(celsius_temp){
    let convert_c;
    convert_c = (celsius_temp * (9/5)) + 32;
    temp_message = `${celsius_temp} degrees celsius is equal to ${convert_c}
    degrees farenheit`;
    console.log(temp_message);
}
function farenheitToCelsius(farenheit_temp){
    let convert_f;
    convert_f = (farenheit_temp - 32) * (5/9); 
    temp_message = `${farenheit_temp} degrees farenheit is equal to ${convert_f}
    degrees celsius`;
    console.log(temp_message);
}

celsiusToFarenheit(0);
farenheitToCelsius(32);

