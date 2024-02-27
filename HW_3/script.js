for (let i = 1; i < 11; i++) {
    document.write(`<div>
        hello world ${i}
    </div>`)
}


// ---------------------------------

for (let i = 1; i < 11; i++) {
    document.write(`<div>
        index ${i}
    </div>`)
}


// ------------------------------

let i = 0

while (i < 11) {
    document.write(`<h1>
        Use while ${i}
    </h1>`)
    i++
}


// ----------------------------

let j = 0
while (j < 11) {
    document.write(`<h1>
        Use while index ${j}
    </h1>`)
    j++
}


// ---------------------------

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

for (let k = 0; k < listOfItems.length; k++) {
console.log(listOfItems[k])
    document.write(`<h1>
       listOfItems[k]
    </h1>`)
}

// ------------------------------------

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
    console.log(product.image)

    document.write(`
   <div class="product-card">
        <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
        <img style="width: 100px" src=${product.image} alt="" class="product-image">
</div>
    `)
}


//-------------------

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.status === true)
    {
        console.log("user with status true", user)
    }

    if (user.status === false)
    {
        console.log("user with status false", user)
    }

    if (user.age > 30)
    {
        console.log("user older than 30 ", user)
    }

}