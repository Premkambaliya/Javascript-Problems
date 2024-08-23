// String Questions


// Q-1
// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// const input = "this is a test";
// const output = reverseString(input);
// console.log(output);


// Q-2
// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }
 
// let str1 = "madam";

// console.log(isPalindrome(str1));


// Q-3
// function getVowels(string) {
//     let Vowels = "aAeEiIoOuU";
//     let vowelsCount = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (Vowels.indexOf(string[i]) !== -1) {
//             vowelsCount += 1;
//         }
//     }
//     return vowelsCount;
// }
// console.log(
//     "The Number of vowels in -" +
//         " sir " +
//         getVowels(
//             "sir"
//         )
// );


// Q-4
// let str = "geeksforgeeks";
// let res = null;
// for (let char of str) {
//     if (
//         str.indexOf(char)
//         ===
//         str.lastIndexOf(char)
//     ) {
//         res = char;
//         break;
//     }
// }
// console.log("Input: " + str);
// console.log("Non-repeating character: " + res);


// Q-5
// function wordsLen(str) {
//     const array = str.trim().split(/\s+/);
//     return array.length;
// }

// const str = "Welcome, to the Geeeksforgeeks";

// console.log("Word count:" ,wordsLen(str));


// Q-6
// Q-7
// var str = "A computer science portal for geeks";

// var newStr = str.split("");

// for (var i = 0; i < newStr.length; ++i){
//     if (newStr[i] === " ") {
//     newStr[i] = "-";
//     }
// }
// document.write(newStr.join("") );


// Q-8
// function sentenceCase(str) {
//     if ((str === null) || (str === ''))
//         return false;
//     else
//         str = str.toString();

//     return str.replace(/\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toUpperCase() +
//                 txt.substr(1).toLowerCase();
//         });
// }

// console.log(sentenceCase('javascript'));


// Q-9
// function containsOnlyDigits(str) {
//     return /^\d+$/.test(str);
// }

// console.log(containsOnlyDigits("12345")); 
// console.log(containsOnlyDigits("1234a5"));


// Q-10

// function removeDuplicate(str, n)
//     {
//         var index = 0;

//         for (var i = 0; i < n; i++)
//         {

//             var j;
//             for (j = 0; j < i; j++) 
//             {
//                 if (str[i] == str[j])
//                 {
//                     break;
//                 }
//             }

//             if (j == i) 
//             {
//                 str[index++] = str[i];
//             }
//         }
        
//         return str.join("").slice(str, index);
//     }

//         var str = "geeksforgeeks".split("");
//         var n = str.length;
//         document.write(removeDuplicate(str, n));


// Q-11
// function longest(str) {

//     str = str.match(/[a-zA-Z0-9]+/gi);

//     let largest = "";

//     for (let i = 0; i < str.length; i++) {
    
//         if (str[i].length > largest.length) {
//             largest = str[i];
//         }
//     }
//     return largest;
// }

// console.log(
//     longest(
//         "Hello guys this is geeksfor where" +
//             " students learn programming"
//     )
// );


// Q-12
// function capitalizeFLetter() {
//     let string = 'prem kambaliya';
//     console.log(string[0].toUpperCase() +
//         string.slice(1));
// }
// capitalizeFLetter()


// Q-13
// let str = "prem";
// let repeatCount = str.repeat(100);
// console.log(repeatCount);


// Q-14
// Q-15
// Q-16
// Q-17
// const str = 'my name is prem';

// console.log(str.startsWith('my')); 
// console.log(str.startsWith('name')); 
// console.log(str.startsWith('is')); 
// console.log(str.startsWith('prem')); 


// Q-18
// function func() {

//     let str = 'my name is prem';

//     let value = str.endsWith('prem');
//     console.log(value);
// }
// func();


// Q-19
// Q-20
// let inputStr = "this is laptop.this is big laptop";
// let charToRemove = "laptop";
// let regex = new RegExp(charToRemove, 'g');
// let result = inputStr.replace(regex, '');
// console.log(result);
