//[]

// let arr = [1, 22, 12, 23]
// console.log(arr)
// console.log(arr[2])
// arr[2] = 99
// console.log(arr[2])


// let arr = [1, 22, 12, 23]
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr)


// for (let item of arr ){
//     console.log('For Of', item)
// }
// for (let index in arr ){
//     console.log('For in', index)
// }
//sum of numbers
// let arr = [1, 5, 6, 8]
// let sum = 0
// for (let item of arr){
//     sum += item
// }
// console.log(sum)


let imgs = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s', 
             'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', 
             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s']

let output =''
for(let item of imgs){
     output += `<img src = ${item} width = '200px' height = '200px'/>`
    // output += "<img src =  " + item + " width = '200px' height = '200px'/>"
}
document.write(output)
// console.log(output)

//.push - добавление элемента в конец массива, динамический массив
//.unshift - добавление элемента в начало массива
//pop - удаление с конца, последнее значение
//.shift - удаление с начало массива


let testArr = [22, 124, 23, 42, 53]
// testArr.push(23)
// console.log(testArr)
// testArr.unshift(122)
// console.log(testArr)

// testArr.pop()
// testArr.pop()
// console.log(testArr)

// testArr.shift()
// console.log(testArr)

// testArr.sort();
// console.log(testArr)

// testArr.reverse();
// console.log(testArr)
// console.log(testArr.join('-'))
// console.log(testArr.keys())


//task1
//Пользователь вводит данные, и чтобы он добавлялся в массив
// let size = +prompt('Enter size of array')
// let tempArr = []
// for(let i = 0; i < size; i++){
//     let num = Number(prompt('Enter element of array'))
//     tempArr.push(num)
//     // temArr.push(Number(prompt('Enter element of array')))
// }
// console.log(tempArr)

//task-2 . slice -  Если мы указываем slice(1, 3), то в новый массив попадут элементы с индексами 1 и 2, но не 3.

// let num = [1, 2, 3 , 4]
// console.log(num.slice(1,3))

// let fruits = ["apple", "banana", "cherry", "date"]
// console.log(fruits.slice(1,3))


//task-3. У вас будут два массива negative, positive. Нужно пробежаться по массиву, найти положительные и отрицательные элементы и добавить к этим массивам
// let array = [ 2, 11, -2 , -5, 12, 88, 99]
// let neg =[]
// let pos = []

// for (let item of array) {
//     if(item < 0){
//         pos.push(item)
//     } else {
//         neg.push(item)
//     }
// }
// console.log(array)
// console.log(neg)
// console.log(pos)


//objects
// let obj = {
//     key:value,
//     key1: value1
// }
//можно через. и []
// let tempObj = {
//     name: 'Erke',
//     skill: 'JS',
// } 
// console.log(tempObj)
// console.log(tempObj.name)
// console.log(tempObj.skill)

// console.log(tempObj['name'])

//array
// let tempObj = {
//     name: 'Erke',
//     skills: ['JS', 'HTML', 'CSS','SQL']   //уже выводится массив
// }
// tempObj .address = 'Almaty'

// console.log(tempObj)

// for (let item of tempObj.skills){               //massiv
// console.log(item)                               //выводит кажд.элемент по отдельности (скиллы)
// }

//arrayObject

let arrObj = [
    {
        name: 'Test Name 1 ',
        salary: '1000',
    },
    {
        name: 'Test Name 2 ',
        salary: '2000',
    },
    {
        name: 'Test Name 3 ',
        salary: '3000',
    },
    {
        name: 'Test Name 4 ',
        salary: '4000',
    },
    {
        name: 'Test Name 5 ',
        salary: '5000',
    },
]
console.log(arrObj)

for(let item in arrObj){
console.log(arrObj[item])
console.log(arrObj[item].name, arrObj[item].salary)
}


console.log('-----------------here :for of')
for (let item of arrObj){
    console.log(item.name, item.salary)
}

console.log('-----------------here just: for')
for(let i = 0; i<arrObj.length; i++){
    console.log(arrObj[i].name, arrObj[i].salary)
}


//task-6. вывести сумму всех зарплат

let sum = 0
for (let item of arrObj){
    sum += Number(item.salary)
}
console.log(sum)
