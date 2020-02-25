const {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
} = require('./main.js')


describe('onlyOdds', () => {
  it(`given an array of numbers, returns an array with only those numbers that are odd`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyOdds(nums1)).toEqual([1, 3]);
    expect(onlyOdds([5, 101, 0, 7])).toEqual([5, 101, 7]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyOdds(nums1);
    onlyOdds(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('onlyEvens', () => {
  it(`given an array of numbers, returns an array with only those numbers that are even`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyEvens(nums1)).toEqual([2, 4]);
    expect(onlyEvens([5, 101, 0, 7])).toEqual([0]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyEvens(nums1);
    onlyEvens(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('shortNamesOnly', () => {
  it(`given an array of names, returns only those that are fewer than 7 characters long`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Sharod',
    ];

    const shortNames1 = [
      'Colin',
      'Bogdan',
      'David',
      'Marc',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    const shortNames2 = [
      'Denis',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];


    expect(shortNamesOnly(names1)).toEqual(shortNames1);
    expect(shortNamesOnly(names2)).toEqual(shortNames2);
  })

  it(`does not modify the original array`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Sharod',
    ];

    const original1 = [
      'Colin',
      'Mesuara',
      'Bogdan',
      'David',
      'Patrick',
      'Marc',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Denis',
      'Tyrell',
      'Wilson',
      'Jumary',
    ];

    shortNamesOnly(names1);
    shortNamesOnly(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('yelledGreetings', () => {
  it(`adds an exclamation point to the end of each string`, () => {
    expect(yelledGreetings(['hello', 'there', 'you absolute fiend'])).toEqual(['hello!', 'there!', 'you absolute fiend!']);
  })
})

describe('changeToInitials', () => {
  it(`will return the first letters from each word`, () => {
    expect(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq'])).toEqual(['CJ', 'MK'])
    expect(changeToInitials(['Larry Bird', 'Robert Parrish'])).toEqual(['LB', 'RP'])
  })
})

describe('doubleOdd', () => {
  it(`doubles all odd numbers passed in`, () => {
    expect(doubleOdd([1, 2, 3, 4, 101, 0, 32.5])).toEqual([2, 2, 6, 4, 202, 0, 32.5]);
  })
  
  it(`can handle negative numbers`, () => {
    expect(doubleOdd([-5, -1, -100, -2])).toEqual([-10, -2, -100, -2]);
  })
})

describe('upperCaseFirstLetters', () => {
  it(`uppercases the first letter of each name (as a string) in the given array`, () => {
    expect(upperCaseFirstLetters(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin'])).toEqual(['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin'])
  })

  it(`lowercases the other letters of each name`, () => {
    expect(upperCaseFirstLetters(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])).toEqual(['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin'])
  })
})

describe('add1ToLeft', () => {
  it(`adds a 1 on the left side of positive numbers`, () => {
    expect(add1ToLeft([1, 2, 30, 400])).toEqual([11, 12, 130, 1400])
  })

  it(`can handle negative numbers`, () => {
    expect(add1ToLeft([-1, -50])).toEqual([-11, -150])
  })
})
