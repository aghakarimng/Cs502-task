// // TASK1:

// // 1. Multiply 12 with 8, and console the result:

// let result1 = 12 * 8
// console.log(result1)

// // 2. Divide 10 by 2 add result to variables x, and console x:
// let x = 10 / 2
// console.log(x)

// // 3. Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2, then addition(+) them in console.
// let num1 = 20
// let num2 = 17
// let sum = num1 + num2
// console.log(sum);

// // 4. Create variables called name, surname, and year assign values to them 
// // ('your name', 'your surname', 'your birth of year')
// then add them to variable info and console info
// let name = 'agakerim'
// let surname = 'qenberov'
// let birthYear = '07.27.2001'
// let info = name + ' ' + surname + ' ' + birthYear
// console.log(info)

// // 5. Console the remainder(%) when 17 is divided by 12.
// let remainder = 17 % 12
// console.log(remainder)

// // 6. Create a variable called "city name" (camelCase). Assign value Baku, then call the variable again and reassign value Gence, console result.
// let cityName = 'Baku'
// console.log(cityName)
// cityName = 'Gence'
// console.log(cityName)

// Task 2

// 1.

// let a = 1
// let b = 1
// let c = ++a
// let d = b++

// // console.log(c); =2
// // console.log(d); =1
// // console.log(b); =2

// Task 3

// 1.
// let a = 2
// let x = 1+ (a *= 2)
// console.log(x); =5 

// Task 4

// 1.

// console.log('test1', test); error 
// {
    // let test = "something"
    // console.log('test2', test); test2, soemthing
// }
// console.log('test3', test); error    

// 2.

// console.log('test1', test);  //  test1, undefined
// {
//     var test = "something"
//     console.log('test2', test); //  test2, something
// }
// console.log('test3', test); //  test3, something

// Task 5

// let name = "Ulfat" =string
// let surname = Zakirli =undefined
// let year = 2000 number
// year = "2000" string
// let city; = undefined
// let qualification = null = null
// let obj = { name: 'ulfat' } = object
// let arr = ['a', 'b', 'c'] = array

// Task 6

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.

// let result = 0
// for (let i = 0; i < arr1.length; i++) {
//     result+=arr1[i]
    
// }
// console.log(result);

// 2.

// arr1.push(10)
// arr1.push(88)
// console.log(arr1);

// 3.

// console.log(arr1.slice(2));

// 4.

// arr1.unshift(0, 9, 11)
// console.log(arr1);

// 5.

// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1);

// Task 7 
// const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]

// 1.

// console.log(arr2.slice(2, 8));

// 2.

// const yeni = arr2.indexOf('Gulshen')
// arr2.splice(yeni, 1, 'Rovshen')
// console.log(arr2)

// 3. 

// arr2.map(i => console.log(i))

// 4.

// arr2.map(i => {if (i === 'Anar') console.log(i)})

// 5.
 
// arr2.map((item, index) =>{
//     if(item === 'Anar'){
//         arr2.splice(index, 1, 'Perviz')
//     }
// })
// console.log(arr2);

// 6.

// console.log(arr2.slice(1))

// 7.

// console.log(arr2.length);


// Task 8

// const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

// 1.

// const onylNumbers = arr3.filter(item => typeof item === 'number')
// console.log(onylNumbers);

// 2.

// const onlyTrue = arr3.filter(item => item === true)
// console.log(onlyTrue);

// 3.

// const onlyFalse = arr3.filter(item => item === false)
// console.log(onlyFalse);

// 4.

// const onlyStrings = arr3.filter(item => typeof item === 'string')
// console.log(onlyStrings);

// Task 8v2

// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.

// const evenNumbers = numbers.filter(item => item%2 !== 0)
// console.log(evenNumbers);

// 2.

// const oddNumbers = numbers.filter(item => item%2 !== 1)
// console.log(oddNumbers);

// Task 9

// const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// 1.

// const iflibirsey = arr4.map(item => {
//     if (typeof item === 'number') {
//         return item += 10
//     }
//     else if (typeof item === 'string' ){
//         return item += " is string"
//     }
//     else if (item === false ){
//         return item += " is falsy value"
//     }
// } )
// console.log(iflibirsey);

// 2.

// const isNumbers = arr4.filter(item => typeof item === 'number' )
// const sum = isNumbers.reduce((acc, current) => acc + current, 0  )
// console.log(sum);

// 3.

// let count = 0
// const isTrue = arr4.map(item =>{
//     if (item === true) {
//         count += 1
//     }
// } )
// console.log(count);

// 4.

// let count = 0
// const isString = arr4.map(item =>{
//     if ( typeof item === 'string'){
//         count += 1
//     }
// })
// console.log(count);

// 5.

// let count = 0 
// const isFalse = arr4.map( item => {
//     if ( item === false ){
//         count += 1
//     }
// })
// console.log(count);

// Task 10

// 1.


// const person = {
//     name: 'Hasan',
//     surname: 'Salimzade',
//     age: 20,
//     city: 'Baku'
// }

// 2.

// person.name = 'John'
// console.log(person);



// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

// console.log(obj.info.gender);
// console.log(obj.info.loc.city);

// Task 11

// 1.

// let fullName = 'Hasan Salimzade Namiq'
// console.log(fullName.split(''));

// 2.

// const parcalaraBolunenIsim = fullName.split(' ')
// const gizlenilmisIsim = parcalaraBolunenIsim.slice(1) 
// const qosulmusIsim = gizlenilmisIsim.join(' Hasan ')
// console.log(qosulmusIsim);

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// 4.

// let count = 0
// arr.map(item => {
//     if (item === 5) {
//         count += 1
        
//     }
// })
// console.log(count);

// 5.

// const sum = arr.reduce((acc, current) => acc + current, 0  )
// console.log(sum);

// 6.

// const artanSira = arr.sort((a, b)=> a-b)
// console.log(artanSira);

// 7.

// let max = 0
// let count = 0
// arr.map(item =>{
//     if (max < item){
//         max = item  
//     }
// })
// arr.map(item => {
//     if (max === item){
//         count += 1
//     }
// })
// console.log(count);

// 8.

// const myName = "Hasan"
// const myNameLength = myName.length
// const isMyNameLengthExist = arr.includes(myNameLength)
// console.log(isMyNameLengthExist);

// 9.

// console.log(arr.findIndex(item => item % 3 === 2));

// 10.

// let max = 0
// arr.map(item => {
//     if (item > max) {
//         max = item   
//     }
// })
// console.log(arr.findIndex(item => item === max));
