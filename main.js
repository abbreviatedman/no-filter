/******************
 * YOUR CODE HERE *
 ******************/

function addMeToEnd(arr) {
  arr.push('Colin');
}

function addMeToStart(arr) {
  arr.unshift('Colin');
}

function changeLast(arr, value) {
  arr[arr.length - 1] = value;
}

function changeAllValuesTo(arr, value) {
   for (let i = 0; i < arr.length; i++) {
     arr[i] = value;
   }
 
 // Alternative ONE WEIRD TRICK method: 
  // arr.fill(value);
}

function oddOrEven(numbers) {
 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
    } else {
      numbers[i] = 'odd';
    }
   
   // Or, as a ternary:
   // numbers[i] = ((numbers[i] % 2 === 0) ? 'even' : 'odd');
 }
}

function changeNextThreeToValue(start, arr, value) {
   for (let i = start; i < start + 3; i++) {
     arr[i] = value;
   }
  
  
  // Or, weird splice method:
  // arr.splice(start, 3, value, value, value);
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
