function palindrome(str) {
  // Good luck!
  
  cleanStr = str.replace(/[^a-z0-9+]+/gi, '');
  var backStr = "";
  for(var i = cleanStr.length -1; i >= 0 ; i--){
    backStr += cleanStr[i].toLowerCase();
     console.log(str[i]);
    
   
    
    
  } if (backStr.toLowerCase() === cleanStr.toLowerCase()){
    return true;
  }
  else {
    return false;
  }

  
}



palindrome("hEEEllo__");
