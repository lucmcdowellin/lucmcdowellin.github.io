console.log('Homework');

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

function myFunctionTest2(expected, found) {

    if (expected === found) {
        return true;
    } else {
        return false;
    }
}

/*  2   Define a function max() that takes two numbers as arguments and
 returns the largest of them. Use the if-then-else construct available
  in Javascript.*/


function max(a, b) {
    return a > b ? a : b;
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.assert(myFunctionTest2(20, max(20, 10)), 'Expected output of max(20,10) is 20');



/*  3   Define a function maxOfThree() that takes three numbers as arguments
 and returns the largest of them.*/

function maxOfThree(x, y, z) {

    const array = new Array();
    array.push(x);
    array.push(y);
    array.push(z);

    let max = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)) );
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

console.assert(myFunctionTest2(44, maxOfThree(5, 4, 44)), 'Expected output of maxOfThree(5,4,44) is 44');
console.assert(myFunctionTest2(55, maxOfThree(55, 4, 44)), 'Expected output of maxOfThree(55,4,44) is 55');
console.assert(myFunctionTest2(4, maxOfThree(55, 4, 44)), 'Expected output of maxOfThree(55,4,44) is 55');




/* 4   Write a function isVowel() that takes a character
 (i.e. a string of length 1) and returns true if it is a vowel,
  false otherwise.*/

function isVowel(string) {

    if (string.length !== 1) {
        return false;
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let flag = false;

    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i] === string) {
            flag = true;
        }
    }

    return flag

}

console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, isVowel('e')));
console.assert(myFunctionTest2(true, isVowel('e')), 'Expected output of isVowel(e) is true');

/*Define a function sum() and a function multiply() that
 sums and multiplies (respectively) all the numbers in
  an array of numbers. For example, sum([1,2,3,4])
   should return 10, and multiply([1,2,3,4]) should return 24*/

function sum(myArray) {
    const array = myArray;

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4];
console.log("Expected output of sum(arr) is 10  " + myFunctionTest(10, sum(arr)));
console.assert(myFunctionTest2(10, sum(arr)), 'Expected output of sum(arr) is 10');


function multiply(myArray) {
    const array = myArray;

    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;

}

console.log("Expected output of multiply(arr) is 24  " + myFunctionTest(24, multiply(arr)));
console.assert(myFunctionTest2(24, multiply(arr)), 'Expected output of multiply(arr) is 24');

/*Define a function reverse() that computes the reversal of a string.
 For example, reverse("jag testar") should return the string "ratset gaj"*/


function reverse(string) {
    let stringy = '';

    for (let i = name.length; i >= 0; i--) {
        stringy += name.charAt(i);
    }

    return stringy;
}


const name = 'james';
console.log("Expected output of reverse(name) is semaj  " + myFunctionTest('semaj', reverse(name)));
console.assert(myFunctionTest2('semaj', reverse(name)), 'Expected output of reverse(name) is semaj');

/*  7   Write a function findLongestWord() that takes an array of words and
 returns the length of the longest one.*/


const findLongestWord = function (wordsy) {
    const words = wordsy;
    let maxLength = words[0].length;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

const words = ['james', 'eric', 'lukass', 'manarihon'];
console.log("Expected output of findLongestWord(words) is 9  " + myFunctionTest(9, findLongestWord(words)));
console.assert(myFunctionTest(9, findLongestWord(words)), 'Expected output of reverse(name) is semaj');

/*  8 Write a function filterLongWords() that takes an array of words
 and an integer i and returns the array of words that are longer than i.*/

function filterLongWords(longWords, i) {
    let array = new Array();
    array = longWords
        .filter(w => w.length > i);
    return array;

}

const expected  = filterLongWords(words, 9);
console.log("Expected output of filterLongWords(words) is ['manarihon']  " + myFunctionTest( expected, filterLongWords(words,9)));
console.assert(myFunctionTest2( expected, filterLongWords(words)), 'Expected output of filterLongWords(words) is [manarihon]');


/*Modify the jsfiddle on the map/filter/reduce slide as follows:
a) multiply each element by 10;
b) return array with all elements equal to 3;
c) return the product of all elements;*/

const a = [1, 3, 5, 3, 3];

const b = a.map(function (elem, i, array) {
    return elem * 10;
});
console.log(b);

const c = a.filter(function (elem, i, array) {
    return elem === 3;
});

console.log(c);

const d = a.reduce(function (prevValue, elem, i, array) {
    return prevValue * elem;
});
console.log(d);

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
console.log(d2);
console.log(d3);

const a1 = [1];
const a2 = [1];

console.log(a1 === a2);