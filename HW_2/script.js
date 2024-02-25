let arr = [true, false, 12, "Я Сонечко", 10.222, {name: "taras"}, [{age: 18}], 8, 9, 10]
console.log("arr", arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9],)
// -----------------------------------


const book_1 = {
    title: "Read People Like a Book",
    pageCount: 278,
    genre: "Psychology"
}
const book_2 = {
    title: "How to Talk to Anyone",
    pageCount: 352,
    genre: "Psychology"
}
const book_3 = {
    title: "Atomic Habits: The life-changing million copy bestseller",
    pageCount: 320,
    genre: "Psychology"
}

// -----------------------------------

const book__1 = {
    title: "Read People Like a Book",
    pageCount: 278,
    genre: "Psychology",
    authors: [
        {
            name: "Patrick King",
            age: 45
        }
    ]

}
const book__2 = {
    title: "How to Talk to Anyone",
    pageCount: 352,
    genre: "Psychology",
    authors: [
        {
            name: "Leil Lowndes",
            age: 45
        }
    ]
}
const book__3 = {
    title: "Atomic Habits: The life-changing million copy bestseller",
    pageCount: 320,
    genre: "Psychology",
    authors: [
        {
            name: "James Clear",
            age: 45
        }
    ]
}

// -----------------------------------

const users = [
    {
        id: 1,
        name: "Bodya",
        username: "bodya_1",
        password: "12345678",
    }, {
        id: 2,
        name: "Ivan",
        username: "ivan_1",
        password: "asdiasdhi",
    }, {
        id: 3,
        name: "Katya",
        username: "katya_1",
        password: "99^^hsda",
    }, {
        id: 4,
        name: "Marta",
        username: "marta_1",
        password: "12345*J",
    }, {
        id: 5,
        name: "Silvia",
        username: "silvi_1",
        password: "*uasdas@",
    }, {
        id: 6,
        name: "Artem",
        username: "artem_1",
        password: "12345Artem678",
    }, {
        id: 7,
        name: "Vasa",
        username: "vasa_1",
        password: "123456Vasa78",
    }, {
        id: 8,
        name: "Oliver",
        username: "oliver_1",
        password: "12qwe345678",
    }, {
        id: 9,
        name: "Denis",
        username: "denis_1",
        password: "1234denis5678",
    }, {
        id: 10,
        name: "Ustia",
        username: "Ustia",
        password: "1234Ustia5678",
    },
]


let usersData = users.map((item) => {
    return console.log(item.name, item.password)
})


// -----------------------------------
const x = +prompt("your number", "number")
if (x !== 0) {
    console.log("Вірно")
    alert("Вірно")
} else {
    console.log("Невірно")
    alert("Невірно")

}


//-----------------------------------
// let s = ? || default,

// -----------------------------------
const time = +prompt("please write number 0 to 59", "number")
if (time >= 0 && time < 15) {
    console.log("first part hour")
    alert("first part hour")
} else if (time >= 15 && time < 30) {
    console.log("second part hour")
    alert("second part hour")

} else if (time >= 30 && time < 45) {
    console.log("third part hour")
    alert("third part hour")

} else if (time >= 45 && time <= 59) {
    console.log("fourth part hour")
    alert("fourth part hour")
}

// ---------------------------------
const day = +prompt("number 1 to 31", "1")

if (day <= 10) {
    console.log("first decade")
    alert("first decade")
} else if (day > 10 && day <= 20) {
    console.log("second decade")
    alert("second decade")
} else if (day > 20 && day <= 31) {
    console.log("third decade")
    alert("third decade")
}

// ----------------------------------

const dayOfWeek = +prompt("Number day of week", "1")

switch (dayOfWeek) {
    case 1:
        console.log("Monday")
        alert("Monday")
        break
    case 2:
        console.log("Tuesday")
        alert("Tuesday")
        break
    case 3:
        console.log("Wednesday ")
        alert("Wednesday ")
        break
    case 4:
        console.log("Thursday ")
        alert("Thursday ")
        break
    case 5:
        console.log("Friday ")
        alert("Friday ")
        break
    case 6:
        console.log("Saturday ")
        alert("Saturday ")
        break
    case 7:
        console.log("Sunday ")
        alert("Sunday ")
        break
}

// ------------------------------------

const firstNumber = +prompt("first number", "number")
const secondNumber = +prompt("second number", "number")

if (firstNumber > secondNumber) {
    console.log(firstNumber)
    alert(firstNumber)
} else if (secondNumber > firstNumber) {
    console.log(secondNumber)
    alert(secondNumber)
} else if (firstNumber === secondNumber) {
    console.log(`${firstNumber} = ${secondNumber}`)
    alert(`${firstNumber} = ${secondNumber}`)
}

// ---------------------------------

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.map(item => {
    if (item.monthDuration >= 5) {
     return    console.log(item.title,"super")
    }
})