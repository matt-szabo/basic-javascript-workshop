function firstLetter(inputString) {
    
    if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[0];
    }
}


function lastLetter(inputString) {
    if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[inputString.length-1];
    }
}

function letterAtPosition(inputString, position) {
    
        if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[position];
    }

}

function addTwoNumbers(num1, num2) {

        if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }

        else {
            return num1+num2;
        }
}
function multiplyTwoNumbers(num1, num2) {

  if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }
    else if (num1 === 0 || num2 === 0){
        return 0;
    }
        else {
            return num1*num2;
        }

}

function calculator(operation, num1, num2) {
    
     
switch(operation) {
    case 'add':
         if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }
        else 
        return num1+num2;
        break;
    
    case 'sub':
         if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }
   else 
        return num1-num2;
        break;
     
    case 'div':
          if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }
        else 
        return num1/num2;
        break;
    case 'mult':
         if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }
 
        else if (num1 === 0 || num2 === 0){
        return 0;
        }
        
        else 
            return num1*num2;
        
        break;
        
    default:
    
        return undefined;
    
}
}

function repeatString(inputString, numRepetitions) {

      if (isNaN(numRepetitions)){
           return undefined;
        }
        
     else if (numRepetitions <= 0)
      {
          return "";
       }
        

       else if (inputString === ""){
             
          return "";
        }
         
         else{
         
           return inputString.repeat(numRepetitions);
         }
         //   return inputString;
        }




function reverseString(inputString) {
    
   
    var splitString = inputString.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


function longestWord(inputString) {

if (inputString === ""){
    return "";
}

var myInputStringAllSplitUp = inputString.split(' ');  // creates an array of strings split at the space ' ' character

var longestWord = 0;

for (var i=0;i<myInputStringAllSplitUp.length;i++){
    
    var longestWordString = "";
    
    if (myInputStringAllSplitUp[i].length >= longestWord){
        longestWord = myInputStringAllSplitUp[i].length;
        var longestWordString = myInputStringAllSplitUp[i]; // set this as the new longest word
    }
    
    
}
return longestWordString;

}

function capitalize(inputString) {
    
var lowcase = inputString.toLowerCase();
    
var myInputStringAllSplitUp = lowcase.split(' '); 

var mycapital = [];

for (var i=0;i<myInputStringAllSplitUp.length;i++){
    
    mycapital[i] = myInputStringAllSplitUp[i].charAt(0).toUpperCase() + myInputStringAllSplitUp[i].slice(1);


}

var joinArray = mycapital.join(" ");

return joinArray;
}

function sumOfNumbers(arrayOfNumbers) {

    var sum = 0;
    
    if (arrayOfNumbers === undefined){
        return undefined;
        
    }

for (var a=0; a<arrayOfNumbers.length; a++){
    
    if (typeof arrayOfNumbers[a] != 'number')
    {
        return undefined;
    }

}  


for (var j=0; j<arrayOfNumbers.length; j++){
    
    if (typeof arrayOfNumbers[j] === 'number')
    {
        sum += arrayOfNumbers[j];
    }

}    
    return sum;



}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};