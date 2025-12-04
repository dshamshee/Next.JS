
// let str = "DDDUUDUDDUUUDDD"

// const arr = [...str];
// let uCount = 0;
// let dCount = 0;
// let result = ""

// arr.forEach((element, index) => {
//     if(element === 'U' && arr[index + 1] === 'U'){
//         uCount++;
//         result += "U";
//     }else if(element === 'D'){
//         result += " ";
//     }
// });

// console.log(result);
// console.log(uCount);



// let str = "UDDUDUUDDU";
// let arr = [...str];
// let level = 0;
// result = 0;
// let valleys = 0;
// arr.forEach((element, index) => {
    
//     if(element === "U"){
//         level++;
//     }else if(element === "D"){
//         level--;
//     }

//     if(level === 0){
//         valleys++;
//     }

//     result = Math.floor(valleys/2);
    
// });


// console.log(result);



//  const numbers = [1, 2, 3, 4, 5];

// const searchArr = (arr, target)=>{

//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === target) return true;
//     }
// }

// const rs = searchArr(numbers, 3);
// console.log(rs ? "Element found" : "Element not found");



// const str = "abcabcbb"
// const arr = [...str];
// let rsStr = "";
// const resultArr = [];

// for(let i = 0; i<arr.length; i++){
//     rsStr = arr[i];
//     for(let j = i+1; j<arr.length; j++){
//         if(!rsStr.includes(arr[j])){
//             rsStr += arr[j];
//         }else break;
//     }
//     resultArr.push(rsStr);
// }

// const largestStr = resultArr.sort((a, b)=> b.length - a.length);

// console.log(largestStr[0]);


// let arr = [1, 2, 3, 4, 5];
// console.log(Math.max(...arr));
// =


// let num = 0.1 + 0.2;
// // let num2 = ;

// switch(Number(num.toFixed(1))){
//     case 0.3:
//         console.log("Hello");
//         break;
//     case 0.5:
//         console.log("Hey");
//         break;
//     default:
//         console.log("Namaste");
//         break;
// }


// Print the right side right angle triangle pattern
// let n = 5;
// for(let i =1; i<=n; i++){

//     for(let j =1; j<=n-i; j++){
//         process.stdout.write("  ");
//     }
//     for(let j=1; j<=i; j++){
//         process.stdout.write(" *");
//     }
//     console.log();
// }


// Print the 'X' pattern 
// let n = 7;
// for(let i =1; i<=n; i++){

//     for(let j =1; j<=n; j++){
//         if(i===j || i+j=== n+1){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();

// }



// Print the 'V' pattern 
// let n = 5;
// for(let i =1; i<=n; i++){

//     for(let j =1; j<=2*n-1; j++){
//         if(i===j || i+j=== 2*n){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ");
//         }
//     }
//     console.log();

// }

// Take input from the user and store it in the array
// const prompt = require("prompt-sync")();
// let arr = [];
// for(let i =1; i<=5; i++){
//     const num = prompt("Enter an Element of the array: ")
//     arr.push(Number(num));
// }

// console.log(arr);


// Find the second largest element in the array
// let arr = [10, 20, 30, 40, 40];

// let max = Math.max(arr[0], arr[1]);
// let secondMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i<arr.length; i++){
//     if(arr[i] > max){
//         secondMax = max;
//         max = arr[i];
//     }else if (arr[i] > secondMax && arr[i] !== max){
//         secondMax = arr[i];
//     }
// }

// console.log(secondMax);


// Reverse the array
// let arr = [1, 2, 3, 4, 5, 6];
// let i =0;
// let j = arr.length-1

// for(let k=0; k<arr.length; k++){
//     if(i<j && i!==j){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }
// }

// console.log(arr);


//  Move all zeros to the end of the array and 1s to the front
// let arr = [0, 1, 0, 1, 0, 1, 0, 1];
// let i = 0;
// let j = 0;

// while(i<arr.length && j !== arr.length){
//     if(arr[i] == 0){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         j++;
//         i++;
//     }else{
//         i++;
//     }
// }

// console.log(arr);


//  Left rotaion by 1 step
// let arr = [1, 2, 3, 4, 5];
// let first = arr[0]

// for(let i =1; i<arr.length; i++){
//     arr[i-1]= arr[i]
// }
// arr[arr.length-1] = first;
// console.log(arr);

// Right rotaion by 1 step
// let arr = [1, 2, 3, 4, 5];
// let last = arr[arr.length-1]

// for(let i =arr.length-1; i>=1; i--){
//     arr[i]= arr[i-1]
// }
// arr[0] = last;
// console.log(arr);


// Approach 1: left rotation by k steps
// const prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let target = Number(prompt("Enter the target: "))
// target = target%arr.length;
// let head = arr[0];
// let count = 0;

// for(let i=1; i<=target; i++){
//     count++;
//     for(let j=0; j<arr.length-1; j++){
//         // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         arr[j] = arr[j+1];
//     }

//     arr[arr.length-1] = head;
//     head = arr[0];
// }

// console.log(arr)
// console.log("Number of iterations: "+count);



// Approach 2: left rotation by k steps
// const prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let target = Number(prompt("Enter the target: "))
// let newArray = new Array(arr.length)

// for(let i=0; i < arr.length; i++){
//     newArray[i] = arr[(i+target)%arr.length];
// }

// console.log(newArray);


// Approach 1: Right rotation by k steps
// const prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let target = Number(prompt("Enter the target: "))
// let newArray = new Array(arr.length)

// for(let i=0; i < arr.length; i++){
//     // newArray[i] = arr[(i+target)%arr.length];
//     newArray[(i+target)%arr.length] = arr[i]
// }

// console.log(newArray);



// Efficient Approach: Left rotation by k steps

// const prompt = require("prompt-sync")();
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter the value of k: "))

// const reverseArray = (i, j)=>{
//     while(i<j){
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i++;
//         j--;
//     }
// }

// reverseArray(0, k-1);
// reverseArray(k, arr.length-1);
// reverseArray(0, arr.length-1);
// console.log(arr);



// Efficient Approach: Right rotation by k steps

const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the value of k: "))

const reverseArray = (i, j)=>{
    while(i<j){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
}

reverseArray(0, arr.length-1);
reverseArray(0, k-1);
reverseArray(k, arr.length-1);
console.log(arr);


// Merge two sorted arrays in a single new array
// let arr1 = [0,2,5,6]
// let arr2 = [0,0,1,3,4,8]
// let i = j = k = 0;
// let mergeArray = new Array(arr1.length+arr2.length)

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i] < arr2[j]){
//         mergeArray[k++] = arr1[i++];
//     }else{
//         mergeArray[k++] = arr2[j++];
//     }
// }

// while(j<arr2.length){
//     mergeArray[k++] = arr2[j++];
// }
// while(i<arr1.length){
//     mergeArray[k++] = arr1[i++];
// }

// console.log(mergeArray);


// Convert the String in the Uppercase or Lowercase
// let str = "DANISH 123";
// let arr = [...str];
// let result = "";

// arr.forEach((Element, index)=>{
//     if(Element.charCodeAt(0) >= 65 && Element.charCodeAt(0) <= 90){
//         let ascii = Element.charCodeAt(0) + 32;
//         result += String.fromCharCode(ascii);
//     }else if (Element.charCodeAt(0) >= 97 && Element.charCodeAt(0) <= 122){
//         let ascii = Element.charCodeAt(0) - 32;
//         result += String.fromCharCode(ascii);
//     }else {
//         result += Element;
//     }
// })

// console.log(result);


// Reverse the String
// let str = "DANISH";
// let arr = [...str];
// let result = "";

// for(let i= arr.length-1; i>=0; i--){
//     result += arr[i];
// }
// console.log(result);


// Approach 1: Check if the string is a palindrome
// let str = "madam";
// let rev = ""

// for(let i=str.length-1; i>=0; i--){
//     rev += str.charAt(i);
// }
// if(str === rev) console.log("Palindrome");
// else console.log("Not a Palindrome");
// console.log(rev);


// Approach 2: Check if the string is a palindrome
// let str = "madam";

// const isPalindrome = (str)=>{
//     let i = 0; 
// let j = str.length-1;

// while(i<=j){
//     if(str.charAt(i) !== str.charAt(j)){
//         return false
//     }
//     i++;
//     j--;
// }
// return true;
// }

// console.log(isPalindrome(str) ? "Palindrome" : "Not a Palindrome");


// Convet the Charecter in the Uppercase to Lowercase and Lowercase to Uppercase
// let str = "DaNi@2Sh";
// let newStr = "";
// for(let i=0; i<str.length; i++){
//     if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
//         newStr += String.fromCharCode(str.charCodeAt(i) + 32)
//     }else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
//         newStr += String.fromCharCode(str.charCodeAt(i) - 32)
//     }else{
//         newStr += str.charAt(i)
//     }
// }
// console.log(newStr);


// Count the Frequency of the Charecter in the String
// let str = "hello";
// let freq = new Array(128).fill(0);

// for(let i=0; i<str.length; i++){
//     let index = str.charCodeAt(i);
//     freq[index]++;
// }

// for(let i=0; i<freq.length; i++){
//     if(freq[i] > 0){
//         console.log(String.fromCharCode(i)+" Appears at " + freq[i] + " times")
//     }
// }

// for(let i=0; i<str.length; i++){
//     console.log(str[i] + " appears at " + freq[str.charCodeAt(i)] + " times")
// }


// let arr = [2, 4, 5, 9, 16, 25, 32, 36, 50, 49]
// let newArr = [];
// for(let i=0; i<arr.length; i++){
//     let count = 0;
//     for(let j=0; j<=arr[i]; j++){
//         if(arr[i] % j === 0){
//             count++;
//         }
//     }
//     if(count%2 !== 0) newArr.push(arr[i]);
// }

// console.log(newArr);