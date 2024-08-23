// Beginner Friendly Questions


// Q-1
// console.log("Hello, World!")


// Q-2
// function sum(num1, num2){
//     console.log(num1 + num2)
// }
// sum(3,5)


// Q-3
// function num(num1, num2, num3) {
    
//     if (num1 > num2 && num1 > num3) {
//         console.log(num1, " _is_big_number ")
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(num2, " _is_big_number ")
//     } else if (num3 > num1 && num3 > num2) {
//         console.log(num3, " _is_big_number ")
//     } else if (num1 = num2 = num3) {
//         console.log(same_number)
//     }
// }
// num(1,10,8)


// Q-4
// function num(num1){
//     if(num1%2==0){
//         console.log("even number")
//     }else{
//         console.log("odd number")
//     }
// }
// num(10)


// Q-5
// var number=5;
// var factorial=1;
// for(i=1;i<=number;i=i+1){
//     factorial=factorial*i;
// }
// console.log(factorial);


// Q-6  
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


// Q-7
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


// Q-8
// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 40];

//     let minValue = Math.min(...Arr);
//     let maxValue = Math.max(...Arr);
    
//     console.log("Minimum element is:" + minValue);
    
// }

// findMinMax()


// Q-9
// let number = [6,5,2,3,7,1];
// number.sort();
// console.log(number)


// Q-10


// Q-11
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, current) => accumulator + current);
// console.log(sum); 


// Q-12
// function printFibonacci(n) {
//     let a = 0, b = 1, c;
//     console.log(a);
//     console.log(b);
//     for (let i = 2; i < n; i++) {
//       c = a + b;
//       console.log(c);
//       a = b;
//       b = c;
//     }
//   }
  
//   printFibonacci(15);


// Q-13
// var prime_number=97;

// if(prime_number%2==1){
//     console.log("prime number")
// }
// else{
//     console.log("no prime number")
// }


// Q-14
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


// Q-15


// Q-16
// let arr = [1,2,3,4,5,6,2,3,6];

// function removeDuplicates(arr) {
// return arr.filter((item,
//   index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));


// Q-17
// let first_array = [1, 3, 5, 7, 9];
// let second_array = [2, 3, 4, 5, 6, 9];

// let res_arr = (first_array, second_array) => {
//     let new_array = [];
//     for (let i = 0; i < first_array.length; i++) {
//         for (let j = 0; j < second_array.length; j++) {
//             if (first_array[i] === second_array[j]) {
//                 new_array.push(first_array[i]);
//             }
//         }
//     }
//     return new_array;
// };

// console.log("Array obtained is :");
// console.log(res_arr(first_array, second_array));

// Q-18
// function areAnagram(str1,str2)
// {
// 	let n1 = str1.length;
// 	let n2 = str2.length;
// 	if (n1 != n2)
// 		return false;
// 	str1.sort();
// 	str2.sort()
// 	for (let i = 0; i < n1; i++)
// 		if (str1[i] != str2[i])
// 			return false;
// 	return true;
// }
// let str1=['t', 'y', 's', 'w'];
// let str2=['t', 's', 'y', 'w'];
// if (areAnagram(str1, str2))
// 	document.write(
// 	" two strings are anagram  ");
// else
// 	document.write(
// 	" two strings are not anagram ");


// Q-19
// Q-20
// let Array=[1, [2, 3], [4, [5, 6]]]
// console.log(Array.flat(Infinity))


// Q-21
// Q-22
// Q-23
// Q-24
// Q-25
// function findSecondLargest(arr) {
//     let first, second;

//     if (arr.length < 2) {
//         return "Invalid Input";
//     }

//     arr.sort();

//     for (let i = arr.length - 2; i >= 0; i--) {
//         if (arr[i] !== arr[arr.length - 1]) {
//             return "The second largest element is " + arr[i];
//         }
//     }

//     return "There is no second largest element";
// }

// const arr = [12, 35, 10, 35, 10, 34, 1];

// console.log(findSecondLargest(arr)); 


// Q-26
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


// Q-27
// function findMissingNumber(arr) {
//         const n = arr.length + 1;
//         const sumOfFirstN = (n * (n + 1)) / 2;
    
//         let sumOfArray = 0;
//         for (let i = 0; i < n - 1; i++) {
//             sumOfArray = sumOfArray + arr[i];
//         }
    
//         let missingNumber = sumOfFirstN - sumOfArray;
    
//         return missingNumber;
//     }
    
//     const arr = [1, 2, 5, 4, 6, 8, 7];
//     const missingNumber = findMissingNumber(arr);
//     console.log("Missing Number: ", missingNumber);

// Q-28
// Q-29
// Q-30
// Q-31