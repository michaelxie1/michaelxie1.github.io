let lucas_height; 
let lucas_weight;
let lucas_BMI;
lucas_height = 1.69;
lucas_weight = 78;
lucas_BMI = lucas_weight/ (lucas_height ** 2);
console.log(lucas_BMI);

let john_height; 
let john_weight;
let john_BMI;
john_height = 1.95;
john_weight = 92;
john_BMI =  john_weight/(john_height**2);
console.log(john_BMI);

let lucasHigherBMI;
lucasHigherBMI = (lucas_BMI > john_BMI);
console.log("Data 1: Lucas weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall. " +
"Lucas having a higher BMI than John is " + lucasHigherBMI);


lucas_height = 1.88;
lucas_weight = 95;
lucas_BMI = lucas_weight/ (lucas_height ** 2);
console.log(lucas_BMI);

john_height = 1.76;
john_weight = 85;
john_BMI =  john_weight/(john_height**2);
console.log(john_BMI);

lucasHigherBMI = (lucas_BMI > john_BMI);
console.log(lucasHigherBMI);
console.log("Data 2: Lucas weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall"+
" Lucas having a higher BMI than John is " + lucasHigherBMI);