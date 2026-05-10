//Learn how to count the occurrences of a specific element in an array using JavaScrip
function occurences(){
const nums = [2,4,5,2,1,2];
const k=2;
let count = 0;
for(let i=0; i< nums.length; i++){
if(nums[i] === k){  
    count++;
}
}
return count;
}
console.log('The occurence of the number 2 in the given array is : ',occurences());
