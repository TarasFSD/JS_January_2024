// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let text_1 = 'hello world'
let text_2 = 'lorem ipsum'
let text_3 = 'javascript is cool'
console.log(text_1.length, "|", text_2.length, "|", text_3.length)


// - Перевести до великого регістру наступні стрінгові значення
console.log(text_1.toUpperCase(), "|", text_2.toUpperCase(), "|", text_3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let text_a = 'HELLO WORLD'
let text_b = 'LOREM IPSUM'
let text_c = 'JAVASCRIPT IS COOL'

console.log(text_a.toLowerCase(), "|", text_b.toLowerCase(), "|", text_c.toLowerCase(),)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str_1 = ' dirty string   ';
console.log(str_1.substring(1, str_1.length - 3)); // Виведе: "dirty string"


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str_2 = 'Ревуть воли як ясла повні';

const stringToarray = (str) => {
    let split = str.split(" ")
    return console.log("text split", split)
}
stringToarray(str_2)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrOfNumber = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
let arrOfLitter = []
const transform = arrOfNumber.map(item => {
    arrOfLitter.push(`${item}`)
})
console.log("arrOfLitter", arrOfLitter)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 0, 5, 2, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNUms = (nums, direction) => {
    if (direction === "ascending") {
        nums.sort(function (a, b) {
            return a - b;
        });
        return console.log("nums", nums)
    } else if (direction === "descending") {
        nums.sort(function (a, b) {
            return b - a;
        });
        return console.log("nums", nums)
    }
}
sortNUms(nums, "descending")
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let arr = []

coursesAndDurationArray.map(item => {
    if (item.monthDuration > 5) {

        arr.push(item)

    }

})
console.log("arr", arr)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

coursesAndDurationArray.map(item => {
    item = {...item, id: 1}
    console.log(item)
})

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

const deckOfCards = [];


let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

suits.forEach(suit => {
    values.forEach(value => {
        let color = (suit === 'spade' || suit === 'clubs') ? 'black' : 'red';
        deckOfCards.push({cardSuit: suit, value: value, color: color});
    });
});

console.log("deckOfCards", deckOfCards)

const aceOfSpades = deckOfCards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
const sixes = deckOfCards.filter(card => card.value === '6');
const redCards = deckOfCards.filter(card => card.color === 'red');
const clubs = deckOfCards.filter(card => card.cardSuit === 'clubs');
const ninesAndAboveInHearts = deckOfCards.filter(card => card.cardSuit === 'heart' && values.indexOf(card.value) >= values.indexOf('9'));
console.log(aceOfSpades, sixes, redCards, clubs, ninesAndAboveInHearts)


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

const decOfCards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    // Інші карти...
];

const cardsBySuits = decOfCards.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {spade: [], diamond: [], heart: [], clubs: []});

console.log(cardsBySuits);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];



coursesArray.map(item=>{
    for (const itemElement of item.modules) {
        if (itemElement === "sass"){
            console.log("with sass",item)
        }
    }

    for (const itemElement of item.modules) {
        if (itemElement === "docker"){
            console.log("with docker",item)
        }
    }
})