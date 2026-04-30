function conditionalStatement(number){
let result = null;
if(number > 0){
    console.log("The given number is positive", number)
} else if(number < 0){
    console.log("The given number is negative", number)
} else
    console.log("The given number is Zero", number)
}

conditionalStatement(10);
conditionalStatement(-2);
conditionalStatement(0);
conditionalStatement(-3);