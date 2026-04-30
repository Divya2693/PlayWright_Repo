 const genderType = "female";
 //genderType = "male";
function printGender(){
    let color = "brown";
    if(genderType.startsWith("female")){
        var age = 30;
        let color="pink";
        console.log("The color is", color)
    }
    console.log("The age is", age)
}

printGender()
console.log("The gender type is", genderType)

