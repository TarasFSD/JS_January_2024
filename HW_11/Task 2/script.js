const container = document.getElementById("container")

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        console.log(data.recipes)
        data.recipes.map(item => {
            console.log("item", item)
            const card = document.createElement("div")
            const name = document.createElement('div')
            const ingredients = document.createElement('ul')
            const prepTimeMinutes = document.createElement('div')
            const instructions = document.createElement('ul')
            const cookTimeMinutes = document.createElement('div')
            const servings = document.createElement('div')
            const difficulty = document.createElement('div')
            const cuisine = document.createElement('div')
            const image = document.createElement('img')

            card.className = "card"
            name.className = "title"
            instructions.className = "instructions"
            image.className = 'img'

            item.ingredients.map(index => {
                const li = document.createElement("li")
                li.innerText=`${index}`
                ingredients.appendChild(li)

            })
            item.instructions.map(index => {
                const li = document.createElement("li")
                li.innerText=`${index}`
                instructions.appendChild(li)

            })

            name.innerText=`Name: ${item.name}`
            prepTimeMinutes.innerText=`Prep time minutes: ${item.prepTimeMinutes}`
            cookTimeMinutes.innerText=`Cook time minutes: ${item.cookTimeMinutes}`
            servings.innerText=`Servings: ${item.servings}`
            difficulty.innerText=`Difficulty: ${item.difficulty}`
            cuisine.innerText=`Cuisine: ${item.cuisine}`
            image.src =`${item.image}`

            card.append(name,ingredients,instructions,prepTimeMinutes,cookTimeMinutes,servings,difficulty,cuisine,image)
            container.appendChild(card)
        })
    });
