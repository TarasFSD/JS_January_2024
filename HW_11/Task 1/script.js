const container = document.getElementById("container")
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        console.log(data.carts)
        data.carts.map(item => {
            console.log("item", item)
            const card = document.createElement("div")
            const total = document.createElement('div')
            const discountedTotal = document.createElement('div')
            const totalProducts = document.createElement('div')
            const products = document.createElement('div')
            item.products.map(index => {
                console.log("index", index)

                const title = document.createElement("div")
                const priceProduct = document.createElement('div')
                const quantity = document.createElement('div')
                const total = document.createElement('div')
                const discountPercentage = document.createElement('div')
                const discountedPrice = document.createElement('div')
                const imgProduct = document.createElement('img')

                imgProduct.className="card-img"
                title.className="card-title"

                title.innerText = `Title: ${index.title}`
                priceProduct.innerText = `Price product: ${index.price}`
                quantity.innerText = `Quantity: ${index.quantity}`
                total.innerText = `Total: ${index.total}`
                discountPercentage.innerText = `Discount percentage: ${index.discountPercentage}`
                discountedPrice.innerText = `Discounted price: ${index.discountedPrice}`
                imgProduct.src = `${index.thumbnail}`



                products.append(title, priceProduct, quantity, total, discountPercentage, discountedPrice, imgProduct)
            })
            total.innerText = `Total: ${item.total}`
            discountedTotal.innerText = `Discounted total ${item.discountedTotal}`
            totalProducts.innerText = `Total products ${item.totalProducts}`

            total.className="card-title"

            card.append(products,total, discountedTotal, totalProducts)
            card.className = "card"
            container.appendChild(card)

        })
    });

