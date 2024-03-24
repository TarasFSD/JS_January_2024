const url_string = window.location;
const url = new URL(url_string);
const idUser = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${idUser}`)
    .then(res => res.json())
    .then(item => {
        const div = document.createElement("div")
        const name = document.createElement("div")
        const username = document.createElement("div")
        const email = document.createElement("div")
        const street = document.createElement("div")
        const suite = document.createElement("div")
        const city = document.createElement("div")
        const zipcode = document.createElement("div")
        const lat = document.createElement("div")
        const lng = document.createElement("div")
        const phone = document.createElement("div")
        const website = document.createElement("div")
        const nameCompany = document.createElement("div")
        const catchPhraseCompany = document.createElement("div")
        const bs = document.createElement("div")


        name.innerText = `Name: ${item.name}`
        username.innerText = `Username: ${item.username}`
        email.innerText = `Email: ${item.email}`
        street.innerText = `Street: ${item.address.street}`
        suite.innerText = `Suite: ${item.address.suite}`
        city.innerText = `City ${item.address.city}`
        zipcode.innerText = `Zipcode: ${item.address.zipcode}`
        lat.innerText = `lat: ${item.address.geo.lat}`
        lng.innerText = `lng: ${item.address.geo.lng}`
        phone.innerText = `Phone number: ${item.phone}`
        website.innerText = `Website ${item.website}`
        nameCompany.innerText = `Name of company: ${item.company.name}`
        catchPhraseCompany.innerText = `Catch phrase: ${item.company.catchPhrase}`
        bs.innerText = `Bs: ${item.company.bs}`

        div.append(name, username, email, street, suite, city, zipcode, lat, lng, phone, nameCompany, catchPhraseCompany, bs)

        document.body.appendChild(div)
    })