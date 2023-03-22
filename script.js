//Creating a function that generate random numbers with specified min and max value.
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Creating an array with 100 random number (minimum number is 1 and maximum number is 50).

const bilanganUtama = [];

function randomNumber(mainArray) {
  for (let i = 0; i < 100; i++) {
    mainArray.push(getRandomInteger(1, 50));
  }
  return console.log(mainArray);
}

randomNumber(bilanganUtama);

//Creating an array with even index number based on the previous array.

const bilanganIndexGenap = [];

function evenArrayIndex(mainArray, evenArray) {
  for (let i = 0; i < mainArray.length; i++) {
    if (i % 2 == 0) {
      evenArray.push(bilanganUtama[i]);
    }
  }
  return console.log(evenArray);
}

evenArrayIndex(bilanganUtama, bilanganIndexGenap);

//Creating an array with odd index number based on the previous array.

const bilanganIndexGanjil = [];

function oddArrayIndex(mainArray, oddArray) {
  for (let i = 0; i < mainArray.length; i++) {
    if (i % 2 == 1) {
      oddArray.push(bilanganUtama[i]);
    }
  }
  return console.log(oddArray);
}

oddArrayIndex(bilanganUtama, bilanganIndexGanjil);

console.log("----------------------------------------");
//calculate total
function totalArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(`Total Bilangan Utama = ${totalArray(bilanganUtama)}`);
console.log(`Total Bilangan Index Ganjil = ${totalArray(bilanganIndexGanjil)}`);
console.log(`Total Bilangan Index Genap = ${totalArray(bilanganIndexGenap)}`);

console.log("----------------------------------------");
//function average
function average(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

console.log(`Rata-rata Bilangan Utama = ${average(bilanganUtama)}`);
console.log(`Rata-rata Index Ganjil = ${average(bilanganIndexGanjil)}`);
console.log(`Rata-rata Index Genap = ${average(bilanganIndexGenap)}`);

console.log("----------------------------------------");
//determining min number
function minNumber(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

console.log(`Min Bilangan Utama = ${minNumber(bilanganUtama)}`);
console.log(`Min Index Ganjil = ${minNumber(bilanganIndexGanjil)}`);
console.log(`Min Index Genap = ${minNumber(bilanganIndexGenap)}`);


console.log("----------------------------------------");
//determining max number
function maxNumber(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

console.log(`Max Bilangan Utama = ${maxNumber(bilanganUtama)}`);
console.log(`Max Index Ganjil = ${maxNumber(bilanganIndexGanjil)}`);
console.log(`Max Index Genap = ${maxNumber(bilanganIndexGenap)}`);

console.log("----------------------------------------");
//creating function for comparing the value between odd and even index of the array.
function compare(oddArray, evenArray) {
  let totalIndexGanjil = totalArray(oddArray);
  let totalIndexGenap = totalArray(evenArray);
 

  if (totalIndexGanjil < totalIndexGenap) {
    console.log(`Total index ganjil < total index genap`);
  } else if (totalIndexGanjil > totalIndexGenap) {
    console.log(`Total index ganjil > total index genap`);
  } else {
    console.log(`Total index ganjil = total index genap`);
  }

  let meanIndexGanjil = average(oddArray);
  let meanIndexGenap = average(evenArray);

  if (meanIndexGanjil < meanIndexGenap) {
    console.log(`Rata-rata index ganjil < Rata-rata index genap`);
  } else if (meanIndexGanjil > meanIndexGenap) {
    console.log(`Rata-rata index ganjil > Rata-rata index genap`);
  } else {
    console.log(`Rata-rata index ganjil = Rata-rata index genap`);
  }

  let minIndexGanjil = minNumber(oddArray);
  let minIndexGenap = minNumber(evenArray);

  if (minIndexGanjil < minIndexGenap) {
    console.log(`Min index ganjil < Min index genap`);
  } else if (minIndexGanjil > minIndexGenap) {
    console.log(`Min index ganjil > Min index genap`);
  } else {
    console.log(`Min index ganjil = Min index genap`);
  }

  let maxIndexGanjil = maxNumber(oddArray);
  let maxIndexGenap = maxNumber(evenArray);

  if (maxIndexGanjil < maxIndexGenap) {
    console.log(`Max index ganjil < Max index genap`);
  } else if (maxIndexGanjil > maxIndexGenap) {
    console.log(`Max index ganjil > Max index genap`);
  } else {
    console.log(`Max index ganjil = Max index genap`);
  }

}

compare(bilanganIndexGanjil, bilanganIndexGenap);