fetch(" http://jsonplaceholder.typicode.com/users")
.then(res=>res.json())
.then(data => {
    const ul = document.createElement("ul")
    data.map(item=>{
        const a = document.createElement("a")
        const  li = document.createElement("li")
        a.href= `./user-details.html?id=${item.id}`
        li.innerText = `Id user ${item.id} and name ${item.name}`
        a.appendChild(li)
        ul.appendChild(a)

    })
    document.body.appendChild(ul)
})