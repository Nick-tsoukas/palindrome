function palindrome(str) {

// replaces all non-alphnumeric characters with a regular expression
  
  
  forwardsStr = str.replace(/[^a-z0-9+]+/gi, '');
  var backwardsStr = "";
  
  // loop that iterates to build the string backwards in all lower case
  
  for(var i = forwardsStr.length -1; i >= 0 ; i--){
    backwardsStr += forwardsStr[i].toLowerCase();
    } if (backwardsStr.toLowerCase() === forwardsStr.toLowerCase()){
    return true;
  }
  else {
    return false;
  }

  
}



palindrome("hEEEllo__");


//  Problem 2
// Find the longest word in a string 
function findLongestWord(str) {
  var newStr =  str.split(' ');
 var longestWord = 0;

  for(var i = 0; i < newStr.length; i++)
  
   if(newStr[i].length > longestWord){
	longestWord = newStr[i].length;
}
    return longestWord;
  }


findLongestWord("May the force be with you");


//Problem nickname
function nicknameGenerator(name) { 
  var vowels = "aeiou";
  var nName = name.slice(0,3)
  
    if (vowels.indexOf(nName[2]) >= 0) {
      nName = name.slice(0,4);
    };  
  return 'The nickname for '+ name + ' is "' +nName +'"';  
}
console.log(nicknameGenerator("Branden"));
