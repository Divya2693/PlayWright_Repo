//1.function declaration
function userProfile(name){
    console.log("Hello", name,"!");
}
userProfile("Divya");

//2.arrow function
let double =(number) => number*number;
console.log(double(2));

//3.Anonymous function
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//4.Callback Function
function callBackFunction(){
console.log("I am callback function");
}

function getUserData(callbackFunction){
setTimeout(() =>{
callBackFunction()
}, 3000);
}

getUserData(callBackFunction);


  