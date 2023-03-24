//Creating a function that generate random numbers with specified min and max value.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creating an array with 100 random number (minimum number is 1 and maximum number is 50).
console.log("--------------------Array with 100 random numbers--------------------");
const bilanganUtama = [];

function randomNumber(mainArray) {
  for (let i = 0; i < 100; i++) {
    mainArray.push(getRandomInteger(1, 50));
  }
  return console.log(`Random Number = ${mainArray}`);
}

randomNumber(bilanganUtama);

//Creating an array with odd index number based on the previous array.
console.log("--------------------Array with odd index number--------------------");
const bilanganIndexGanjil = [];

function oddArrayIndex(mainArray, oddArray) {
  for (let i = 0; i < mainArray.length; i++) {
    if (i % 2 == 1) {
      oddArray.push(mainArray[i]);
    }
  }
  return console.log(`Odd Index Number = ${oddArray}`);
}

oddArrayIndex(bilanganUtama, bilanganIndexGanjil);

//Creating an array with even index number based on the previous array.
console.log("--------------------Array with even index number--------------------");
const bilanganIndexGenap = [];

function evenArrayIndex(mainArray, evenArray) {
  for (let i = 0; i < mainArray.length; i++) {
    if (i % 2 == 0) {
      evenArray.push(mainArray[i]);
    }
  }
  return console.log(`Even Index Number = ${evenArray}`);
}

evenArrayIndex(bilanganUtama, bilanganIndexGenap);

//calculate total
console.log("--------------------Calculate total--------------------");
function totalArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(`Total of Random Number = ${totalArray(bilanganUtama)}`);
console.log(`Total of Odd index Number = ${totalArray(bilanganIndexGanjil)}`);
console.log(`Total of Even Index Number = ${totalArray(bilanganIndexGenap)}`);



//calculate average
console.log("--------------------Calculate average--------------------");
function average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

console.log(`Average of Random Number = ${average(bilanganUtama)}`);
console.log(`Average of Odd index Number = ${average(bilanganIndexGanjil)}`);
console.log(`Average Even Index Number = ${average(bilanganIndexGenap)}`);

//determining min number
console.log("--------------------Minimum Number--------------------");
function minNumber(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(`Min of Random Number = ${minNumber(bilanganUtama)}`);
console.log(`Min of Odd Index Number = ${minNumber(bilanganIndexGanjil)}`);
console.log(`Min of Even Index Number = ${minNumber(bilanganIndexGenap)}`);

//determining max number
console.log("--------------------Maximum Number--------------------");
function maxNumber(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(`Max of Random Number = ${maxNumber(bilanganUtama)}`);
console.log(`Max of Odd Index Number = ${maxNumber(bilanganIndexGanjil)}`);
console.log(`Max of Even Index Number = ${maxNumber(bilanganIndexGenap)}`);

//creating function for comparing the value between odd and even index of the array.
console.log("--------------------Comparison--------------------");
function compare(oddArray, evenArray) {
  let totalIndexGanjil = totalArray(oddArray);
  let totalIndexGenap = totalArray(evenArray);

  if (totalIndexGanjil < totalIndexGenap) {
    console.log(`Total of Odd Index Number < Total of Even Index Number`);
  } else if (totalIndexGanjil > totalIndexGenap) {
    console.log(`Total of Odd Index Number > Total of Even Index Number`);
  } else {
    console.log(`Total of Odd Index Number = Total of Even Index Number`);
  }

  let meanIndexGanjil = average(oddArray);
  let meanIndexGenap = average(evenArray);

  if (meanIndexGanjil < meanIndexGenap) {
    console.log(`Average of Odd Index Number < Average of Even Index Number`);
  } else if (meanIndexGanjil > meanIndexGenap) {
    console.log(`Average of Odd Index Number > Average of Even Index Number`);
  } else {
    console.log(`Average of Odd Index Number = Average of Even Index Number`);
  }

  let minIndexGanjil = minNumber(oddArray);
  let minIndexGenap = minNumber(evenArray);

  if (minIndexGanjil < minIndexGenap) {
    console.log(`Min of Odd Index Number < Min of Even Index Number`);
  } else if (minIndexGanjil > minIndexGenap) {
    console.log(`Min of Odd Index Number > Min of Even Index Number`);
  } else {
    console.log(`Min of Odd Index Number = Min of Even Index Number`);
  }

  let maxIndexGanjil = maxNumber(oddArray);
  let maxIndexGenap = maxNumber(evenArray);

  if (maxIndexGanjil < maxIndexGenap) {
    console.log(`Max of Odd Index Number < Max of Even Index Number`);
  } else if (maxIndexGanjil > maxIndexGenap) {
    console.log(`Max of Odd Index Number > Max of Even Index Number`);
  } else {
    console.log(`Max of Odd Index Number = Max of Even Index Number`);
  }
}

compare(bilanganIndexGanjil, bilanganIndexGenap);

console.log("----------------------------------------");
