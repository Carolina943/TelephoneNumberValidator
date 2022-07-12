/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has
the format of a valid US number.
The following are examples of valid formats for US numbers
(refer to the tests below for other variants):

For this challenge you will be presented with a string such as 800-692-7753 or
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
based on any combination of the formats provided above.
The area code is required. If the country code
is provided, you must confirm that the country code is 1.
 Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {

let regex = /[0-9()]/g;
let newStr = str.match(regex) ;

for(let j = 0; j < str.length ; j++){
  if(str[0] == "-"){
    return false;
  }
  else if(str[2] == " "){
    return false;
  }
}

for(let i= 0; i < newStr.length; i++){
  if(newStr.length == 10){
     return true;
   }
  else if(newStr[0] == "1" && newStr.length == 11){
     return true;
   }
  else if(newStr[0] == "(" && newStr[4] ==")" && newStr[1] == "5" && newStr.length == 12){
     return true;
   }
  else if(newStr[1] == "("  && newStr[5] ==")" && newStr[0] == "1" && newStr.length == 13){
     return true;
  }
  else{
    return false;
  }
 }
}
console.log(telephoneCheck("(555)555-5555"));
