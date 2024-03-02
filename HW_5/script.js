const pi = 3.14


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const areaRectangle = (a, b) => {
    const area = a * b
    return console.log("Area Rectangle", area)
}

areaRectangle(2, 2)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const areaCircle = (r) => {
    const area = pi * Math.pow(r, 2)
    return console.log("Area Circle", area)
}

areaCircle(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCylinder = (h, r) => {
    const area = 2 * pi * r * h + 2 * pi * Math.pow(r, 2)
    return console.log("Area Cylinder", area)
}

areaCylinder(3, 1)

// - створити функцію яка приймає масив та виводить кожен його елемент

let users = [{name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {
    name: 'kolya', age: 29, status: true
}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {
    name: 'anya', age: 31, status: false
}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {
    name: 'masha', age: 30, status: true
}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true}];
const functionOfArr = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement)

    }
}
functionOfArr(users)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const functionWithText = (text) => {
    return document.write(`<p>${text}</p>`)
}
functionWithText("хз який має бути тут текст")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const functionWithUl = (text) => {
    return document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
}
functionWithUl("text li")

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const createUlWithLi = (text, numLi) => {
    let ul = document.createElement('ul');
    for (let i = 0; i < numLi; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    return ul;
}

document.body.appendChild(createUlWithLi("text", 2));


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arrData = [true, false, 300, "Тракториста"]

let arrayList = (arr) => {
    let ul = document.createElement('ul');

    for (const arrKey of arr) {
        console.log("arrKey", arrKey)
        let li = document.createElement('li');
        li.textContent = arrKey;
        ul.appendChild(li);

    }
    return ul;
}


document.body.appendChild(arrayList(arrData))


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const arrOfObject = [{
    id: 1, name: "Сонечко 1", age: 17
}, {
    id: 2, name: "Сонечко 2", age: 18
}, {
    id: 3, name: "Сонечко 3", age: 19
}, {
    id: 4, name: "Сонечко 4", age: 20
}]

const arrayListObject = (arr) => {

    let ul = document.createElement('ul');

    for (const arrElement of arr) {
        console.log(arrElement)
        document.write(`
                <ul>
                <li>id ${arrElement.id}</li>
                <li>name ${arrElement.name}</li>
                <li>age ${arrElement.age}</li>
                </ul>
                `)

    }
}


arrayListObject(arrOfObject)

// - створити функцію яка повертає найменьше число з масиву

const arrOfNumbers = [3, 10, 20, 33, 1, 22, 11]

const functionArrOfNumbers = (arr) => {
    let smallest = arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i]<smallest){
            smallest = arr[i];
        }
    }
    return console.log("Smallest number", smallest)
}
functionArrOfNumbers(arrOfNumbers)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const arrayOfNumbers = [3, 10, 20, 33, 0, 22, 11, 1]

const sum = (arr) => {
    let number = 0;
    for (const arrKey of arr) {
        number = number + arrKey
    }
    return console.log(number)

}
sum(arrayOfNumbers)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


const swap = (arr, index1, index2) => {
    let element = arr[index1];
    arr.splice(index1, 1);
    arr.splice(index2, 0, element);
    return console.log("swap", arr)
}
swap(arrayOfNumbers, 1, 3)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    if (currencyValues && currencyValues) {
        for (const currencyValuesKey of currencyValues) {
            if (exchangeCurrency === currencyValuesKey.currency) {
                let money = sumUAH / currencyValuesKey.value;
                return console.log(exchangeCurrency, money)
            }
        }
    }

}
exchange(1000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], "USD")