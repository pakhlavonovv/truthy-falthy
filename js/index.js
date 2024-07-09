// 1 misol va 2 misol shu yerda, tushunishimcha ikkila misolni yechilishi bir xil

// let userInput = prompt("Ixtiyoriy sonni kiriting");

// const processNumber = (num) => {
//   let numString = num.toString();
//   let numArray = numString.split('');
//   let joinedString = numArray.join('');
//   let sum = numArray.reduce((accumulator, numValue) => {
//     return accumulator + (numValue);
//   }, 0);
  
//   return sum;
// };

// let result = processNumber(userInput);
// console.log(`Kiritilgan sonning raqamlari yig'indisi: ${result}`);

// 3 misol

// let number = +prompt("Ixtiyoriy sonni kiriting");
// let deg = 2;
// let num_degree = number ** 2;
// function isPalindrome(number) {
//     if (num_degree > 10) {

//         let result = +num_degree.toString().split("").reverse().join("")
//         console.log(result);
//         if (num_degree === result) {
//             alert(`Square of ${number} is palindrome`);
//         } else {
//             alert(`Square of ${number} is not palindrome`);
//         }

//     } else {
//         alert("Enter only numbers which squares are double-spaced")
//     }

// }

// isPalindrome(number);

// 4 misol

// let result = Array.from(String(b), Number).reverse()
// console.log(result)

// function fn2(callback){
//     let random = Math.floor(Math.random()*1000)
//     console.log(random)
//     console.log(callback(random))
// }
// fn2((random)=>{
//     let arr = Array.from(random.toString(), Number)
//     let result = arr.reduce((a,b)=> a + b, 0)
//     return result
// })

// 5 misol

// let str = "ikki"
// let new_arr = str.split("").reverse("").join("")
// new_arr === str ? console.log('palindrome') : console.log('palindrome emas')