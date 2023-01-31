// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(maxOfThree(4, 29, 11));

//3. 
function isCharAVowel(vowel) {
  if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
    return true;
  } else {
    return false;
  }
}
console.log(isCharAVowel('c'));

//4.
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
console.log(sumArray([2, 4, 5]));

//5.
function multiplyArray(arrray) {
  let product = 1;
  for (let i = 0; i < arrray.length; i += 1 ) {
    product = product * arrray[i];
  } 
  return product;
}
console.log(multiplyArray([3,4,6]));

//6.
function numArgsThat(a,b,c) {}
console.log(numArgsThat.length)

  