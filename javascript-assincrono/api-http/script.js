/* fetch('https://pokeapi.co/api/v2/pokemon/')
.then(function(resolve) {
    return resolve.json()
})
.then(function(pokemon) {
    console.log(pokemon)
}) */

const url = 'https://jsonplaceholder.typicode.com/posts/2';

const options = {
    method: 'PUT',
    body: '{"title": "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
.then((response) => {
    return response.json()
})
.then((json) => {
    console.log(json)
})