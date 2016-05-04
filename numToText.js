/*
Create a function using recursion called numToText which takes a
string and returns a new string with all numeric numbers from the
input string converted to their corresponding text words. You can
assume that the numbers in the string are single digit nubmers.
Can you implement this function in two different ways?
One way involves creating an inner helper function (or subroutine),
the other way does not use an inner function.

Extra Credit: Have the function handle numbers of any digit size.

Ex: numToText("I have 5 dogs and 6 ponies"); // returns "I have five dogs and six ponies"

*/

var numToText = function(str) {
  var result = '';
  var strArr = str.split(' ');

  if (strArr.length > 1) {
    for (var i = 0; i < strArr.length; i++) {
      if (i === strArr.length - 1) {
        result += numToText(strArr[i]);
      } else {
        result += numToText(strArr[i]) + ' ';
      }
    }
  } else {
    if (!isNaN(Number(str))) {
      if (str === '1') {
        result += 'one';
      } else if (str === '2') {
        result += 'two';
      } else if (str === '3') {
        result += 'three';
      } else if (str === '4') {
        result += 'four';
      } else if (str === '5') {
        result += 'five';
      } else if (str === '6') {
        result += 'six';
      } else if (str === '7') {
        result += 'seven';
      } else if (str === '8') {
        result += 'eight';
      } else if (str === '9') {
        result += 'nine';
      }
    } else {
      result += str;
    }
  }
  
  return result;
};
