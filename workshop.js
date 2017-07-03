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

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

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