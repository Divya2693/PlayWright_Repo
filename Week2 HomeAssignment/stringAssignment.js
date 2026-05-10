//length of the last word
function lengthOfLastWords(sentence){
const words = sentence.trim().split(" ");
const lastWord = words[words.length - 1];
return lastWord.length;
}

console.log(lengthOfLastWords("Hello World"));
console.log(lengthOfLastWords(" fly me to the moon "));

//to find whether the two strings are anagram
//An anagram is when you mix up the letters of a word to make a new one, using all the letters.
function isAnagram(s1, s2){
    //Remove spaces and convert all letters to the same case
    const convert1 = s1.replace(/\s/g).toLowerCase();
    const convert2 = s2.replace(/\s/g).toLowerCase();

    //Sort the Characters
    //split() turns string to array
    //sort() orders them
    //join (turns it back
    const sorted1 = convert1.split('').sort().join('');
    const sorted2 = convert2.split('').sort().join('');

    // Compare Sorted Strings
    return sorted1 === sorted2;

}

console.log(isAnagram('listen', 'silent'));
 console.log(isAnagram('hello', 'world'));

