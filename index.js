// // let cars = localStorage.getItem('cars');
// // console.log(JSON.parse(cars));



// function User(name,age,phone){
//     this.name = name;
//     this.age = age;
//     this.phone = phone;
// };

// User.prototype.about = function (){
//     console.log(this);
// }

// let john = new User("John",24,"+998500095905"); 
// let doe = new User("Doe",44,"+998500095905"); 

// john.about();
// doe.about();


// let arr = [3,-1,5,7,10,4];

// let a = arr.find((value,index,arr) => {
//     return index % 2 == 1
// });

// console.log(a);


// let arr = [3,5,7,10,4];
// let sum  = 0;
// arr.forEach((value) => {
//     sum += value
// })

// console.log(sum);



// let arr = [3,5,7,10,4];
// let sorted = arr.sort(function(a,b){
//     return a - b
// });
// console.log(sorted);





// 1 - misol 

// let arr = [1,2,3];
// let arr1 = [4,5,6];
// let arr2 = [7,8,9];

// let arr3 = arr2.concat(arr1,arr)
// console.log(arr3);


// 2 - misol

// let arr = [1,2,3,4,5,6,7,8,9,10]
// function sum(arr){
//     let arr1 = arr.findIndex((value,index,arr) => {
//         if (value % 2 == 0 && value % 5 == 0) {
//             return index
//         }
//     })
//     return arr1 ** 2
// }
// console.log(sum(arr));

// 3 - misol

// let arr = [1,2,-3,4,5,6,7,8,9,10]
// function sum(arr) {
//     let arr1 = arr.find((a,b,c) => {
//         return a < 0
//     })
//     return arr1
// }
// console.log(sum(arr));


// 4 - misol

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0;
// let arr1 = arr.forEach((a,b,c) => {
//     if (a % 2 == 1 && a % 3 == 0) {
//         sum++
//     }
// });
// console.log(sum);


// 5 - misol

// let arr = [1,"salom",10,true,"bye"]
// function sum(arr) {
//     let arr1 = arr.includes(1)
//     return arr1
// }
// console.log(sum(arr));

// 6 - misol

// let arr = [1,30,48,32,3,6,8,199,47,9]
// let sorted = arr.sort(function(a,b){
//     return a - b
// })
// console.log(sorted);