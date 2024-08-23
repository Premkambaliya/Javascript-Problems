// Array Questions
// Q-1
// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, current) => accumulator + current);
// console.log(sum); 

// Q-2
// const array = [10, 5, 20, 8, 15];
// let largest = array[0];

// array.forEach(element => {
//     if (element > largest) {
//         largest = element;
//     }
// });
        
// console.log("Largest element:", largest);
        
// Q-3
// function findMinMax() {
//     let Arr = [50, 60, 20, 10, 40];
         
//     let minValue = Math.min(...Arr);
//     let maxValue = Math.max(...Arr);
            
 //     console.log("Minimum element is:" + minValue);
            
// }
            
 // findMinMax()
            
// Q-4
// let number = [6,5,2,3,7,1];
// number.sort();
// console.log(number)
            
// Q-5
// let number = [6,5,2,3,7,1];
// number.sort();
// number.reverse();
// console.log(number)
            
// Q-6
// const number = [1, 2, 3, 4, 5];
// number.reverse();
// console.log(number)

// Q-7
// Q-8
// Q-9
// let arr = ["apple", "mango", "apple",
//     "orange", "mango", "mango"];
            
// function removeDuplicates(arr) {
// return arr.filter((item,
//   index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));
                
//  Q-10
// const fruit1 = ['Mango', 'Apple', 'Orange'];
// const fruit2 = ['Banana', 'Avacado', 'Watermelon'];

// fruit2.forEach((element) => {
//     fruit1.push(element);
// });

// console.log(fruit1); 

//  Q-11
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


//  Q-12

//  Q-13
//  Q-14
//  Q-15
//  Q-16
//  Q-17
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
                                
                     
// Q-18
// Q-19
// Q-20
// JavaScript program to move all zeros to the end

// let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
// let n = A.length;
// let B = new Array(n);
// let j = 0;
// let count = 0;

// for (let i = 0; i < n; i++) {
// if (A[i] !== 0) {
// B[j] = A[i];
// j++;
// }
// else {
// count++;
// }
// }

// while (count > 0) {
// B[j] = 0;
// count--;
// j++;
// }

// for (let i = 0; i < n; i++) {
// A[i] = B[i];
// }

// for (let i = 0; i < n; i++) {
// console.log(A[i] + " "); // Print the array
// }
    


// Q-21
// Q-22
// Q-23
// Q-24