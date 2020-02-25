/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(numbers) {
  const odds = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      odds.push(numbers[i]);
    }
  }

  return odds;
}

function onlyEvens(numbers) {
  const evens = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }

  return evens;
}

function shortNamesOnly(names) {
  const shortOnes = [];

  for (let i = 0; i < names.length; i++) {
    if (names[i].length < 7) {
      shortOnes.push(names[i]);
    }
  }

  return shortOnes;
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


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
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
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
