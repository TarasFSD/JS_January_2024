// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    return {
        id,
        name,
        surname,
        email,
        phone
    }
}

const arrUsers = [
    new User("1", "Taras_1", "surname_1", "email_1@gmial.com", "1111111111"),
    new User("3", "Taras_2", "surname_2", "email_1@gmial.com", "1111111111"),
    new User("4", "Taras_3", "surname_3", "email_1@gmial.com", "1111111111"),
    new User("2", "Taras_4", "surname_4", "email_1@gmial.com", "1111111111"),
    new User("5", "Taras_5", "surname_5", "email_1@gmial.com", "1111111111"),
    new User("7", "Taras_6", "surname_6", "email_1@gmial.com", "1111111111"),
    new User("6", "Taras_7", "surname_7", "email_1@gmial.com", "1111111111"),
    new User("8", "Taras_8", "surname_8", "email_1@gmial.com", "1111111111"),
    new User("9", "Taras_9", "surname_9", "email_1@gmial.com", "1111111111"),
    new User("10", "Taras_10", "surname_10", "email_1@gmial.com", "1111111111"),
]

// console.log("arrUsers", arrUsers)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

arrUsers.filter((user) => {
    if (user.id % 2 === 0) {
        // console.log('user',user)
    }
})


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const users = arrUsers.sort((a, b) => a.id - b.id)
console.log(users)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clients = [
    new Client("1", "Name_1", "surname_1", "gmail_1", "1111", [1, 2, 3, 4]),
    new Client("3", "Name_2", "surname_1", "gmail_1", "1111", [1, 2, 3]),
    new Client("2", "Name_3", "surname_1", "gmail_1", "1111", [1, 2, 3, 4, 8, 0, 9]),
    new Client("4", "Name_4", "surname_1", "gmail_1", "1111", [1, 2, 3, 4, 2]),
    new Client("6", "Name_5", "surname_1", "gmail_1", "1111", [1, 2, 3, 4, 5, 6]),
    new Client("5", "Name_6", "surname_1", "gmail_1", "1111", [1,]),
    new Client("7", "Name_7", "surname_1", "gmail_1", "1111", [1, 2, 3,]),
    new Client("8", "Name_8", "surname_1", "gmail_1", "1111", [1, 2, 3, 4]),
    new Client("9", "Name_9", "surname_1", "gmail_1", "1111", [1, 2, 3, 4, 6, 7]),
    new Client("10", "Name_10", "surname_1", "gmail_1", "1111", [1, 2, 3, 4]),


]
console.log("Clients", clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


const arrClient = clients.sort((a, b) => a.order.length - b.order.length)
console.log("arrClient", arrClient)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, maker, year, maxSpeed, volume) {
//     this.model = model
//     this.maker = maker
//     this.year = year
//     this.maxSpeed = maxSpeed
//     this.volume = volume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         return console.log(
//             `
//             name: ${model},
//             maker: ${maker},
//             year: ${year},
//             max speed : ${maxSpeed},
//             volume : ${volume}
//             `
//         )
//
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = newSpeed
//
//     }
//
//     this.changeYear = function (newValue) {
//         return this.year = newValue
//     }
//
//     this.addDriver = function (addDriver) {
//         return this.year = addDriver
//     }
//
// }
//
// let car = new Car("Ford CUGO", "USA", "2022", "250", "2.5")

// - (Те саме, тільки через клас)

class Car {
    constructor(model, maker, year, maxSpeed, volume) {
        this.model = model
        this.maker = maker
        this.year = year
        this.maxSpeed = maxSpeed
        this.volume = volume
    }

    drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info = function () {
        return console.log(
            `
            name: ${model},
            maker: ${maker},
            year: ${year},
            max speed : ${maxSpeed},
            volume : ${volume}
            `
        )

    }
    increaseMaxSpeed = function (newSpeed) {
        return this.maxSpeed = newSpeed

    }

    changeYear = function (newValue) {
        return this.year = newValue
    }

    addDriver = function (addDriver) {
        return this.year = addDriver
    }
}

const car = new Car()


//     -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }

}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name
        this.age = age
        this.foundShoe = foundShoe
    }

}

const arrCinderella = [
    new Cinderella("Cinderella_1", "18", "36"),
    new Cinderella("Cinderella_2", "19", "37"),
    new Cinderella("Cinderella_3", "17", "38"),
    new Cinderella("Cinderella_4", "14", "41"),
    new Cinderella("Cinderella_5", "16", "44"),
    new Cinderella("Cinderella_6", "19", "35"),
    new Cinderella("Cinderella_7", "20", "36"),
    new Cinderella("Cinderella_8", "21", "38"),
    new Cinderella("Cinderella_9", "22", "33"),
    new Cinderella("Cinderella_10", "23", "34"),
]

const prince = new Prince("Ivan", "18", "38")

for (const oneCinderella  of arrCinderella) {
if (oneCinderella.footSize === prince.foundShoe){
    console.log(oneCinderella)
}

}