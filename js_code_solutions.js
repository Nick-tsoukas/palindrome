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
