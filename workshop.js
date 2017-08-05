function firstLetter(inputString) {
    
    if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[0];
    }
}

// return firstletter of string ie index position 0 and check for undefined



function lastLetter(inputString) {
    if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[inputString.length-1];
    }
}

//learned arrayname.length is a method and arrayname.length-1 is the last position of a string


function letterAtPosition(inputString, position) {
    
        if (inputString === undefined){
        return undefined;
    }
    
    else {
        return inputString[position];
    }

}

// here we are passing two arguments to a function... 


function addTwoNumbers(num1, num2) {

        if (isNaN(num1) || isNaN(num2)){
            return undefined;
        }

        else {
            return num1+num2;
        }
}

//learned how to use isNaN -> returns true if the number is invalid


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

function uniqueElements(array1, array2) {//
    
    var diff = [];
    var match = false;
    
    
    
    
    
    for (var x=0;x<array1.length;x++){//
    
    match = false;
    
            for (var y=0;y<array2.length;y++){
            
                 if (array1[x]==array2[y]){//
                     var match = true;
                    }//
                    
                     if (typeof array2[y] != 'number')
                        {
                            return undefined;
                        }
                  }
            
            if (match==false){//
                diff.push(array1[x]);
            }//
        }//
        
    

   for (var c=0;c<array2.length;c++){//
    
    match = false;
    
            for (var d=0;d<array1.length;d++){//
            
                 if (array2[c]==array1[d]){//
                     var match=true;
                    }//
                    
                     if (typeof array1[d] != 'number')
    {
        return undefined;
    }
            }//
            
            if (match==false){//
                diff.push(array2[c]);
            }//
        }//
        
    
 
 
return diff;
}//

function isPalindrome(inputString) {
    
    inputString = inputString.toLowerCase().replace(/[^a-z0123456789]+/g,""); 
    
    var origSplit = inputString.split("").join("");
    var flipped = inputString.split("").reverse().join("");

    //console.log(flipped[0]);
    
    for(var i=0;i<inputString.length;i++){
        
        var a = origSplit.charAt(i);
        var b = flipped.charAt(i);
       // console.log(a);
    //    console.log(b);
        
          if (a !== b ){
              
               return false;
              
          }
        
    }
    
  
    return true;


}


isPalindrome("Montreal")



function wrapCharacter(inputString) {

var testString = "";

for(var i=0;i<inputString.length;i+=40){
    
    if (i+40 > inputString.length){
        testString += inputString.split(i, i+ ((i+40) - inputString.length))
        //console.log(testString);
    }
    
    else if (inputString[i]==" "){
        testString+=inputString.slice(i+1,i+41)+'\n';
        ++i;
    }
    
    else {
    testString+=inputString.slice(i,i+40)+'\n';
}
}
//console.log(testString);
return testString;
}




function wrapCharacter2(inputString) {

var testString = "";

for(var i=0;i<inputString.length;inputString[i].length+1){
    
    if (inputString[i].length > inputString.length){
        testString += inputString.split(i, i+ ((inputString[i].length) - inputString.length))
        //console.log(testString);
    }
    
    else if (inputString[i]==" "){
        testString+=inputString.slice(i+1,i+41)+'\n';
        ++i;
    }
    
    else {
    testString+=inputString.slice(i,i+40)+'\n';
}
}
//console.log(testString);
return testString;
}


//wrapCharacter("the increased productivity fostered by a friendly environment and quality tools is essential to meet ever increasing demands for software.");



function wrapWord(inputString) {
    
    var newArr=[];
    var k=0;
    var one=0;
    var newString="";
    var acc=0;
   // var adder=0;
    
                function findWord(inputString){
                    
                    for(var h=0;h<inputString.length;h++){
                        
                         var car = inputString.charAt(one+h);
                         
                         if (one+h > inputString.length){
                             newArr[k]=inputString.slice(one,one+h);
                             
                         } // WORKING FOR LAST WORD
                        
                                    if (car == " "){
                                        
                                        newArr[k]=inputString.slice(one,one+h);
                                        console.log(newArr[k]);
                                        k++;
                                       
                                       
                                       return findWord(one+h+1);
                                    }
                                    
                    }
                return newArr;
                }
    
    //findWord(one);
    
    return findWord(inputString);
 
    
//     for(var l=0;l<newArr.length;l++){
        
//         acc += newArr[l].length;
        



//           if(newArr[l].length >= 40){
//             newString += "\n" + newArr[l] +"\n";
//             acc=0;
//         }
        
//         else if (acc<40){
//             newString = newString + newArr[l]+" ";
//             acc++;
//         }
//         else if (acc==40){
//             newString = newString + newArr[l] +"\n";
//             acc=0;
//         }
//         else if (acc>40){
//             newString = newString + "\n" + newArr[l];
//             acc=0;
//         }
      
        
//     }
    
//     newString = newString.slice(0, -1);//reuse this before newline
    
//   console.log(newString);
//     return newString;
    
    
    
}


//wrapWord("the increased productivity fostered by a friendly environment and quality tools is essential to meet ever increasing demands for software.");
//wrapWord("this string contains a wordthatislargerthanfourtycharactersfortesting the increased productivity fostered by a friendly environment and quality tools");
//wrapCharacter("this string contains a wordthatislargerthanfourtycharactersfortesting the increased productivity fostered by a friendly environment and quality tools");


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