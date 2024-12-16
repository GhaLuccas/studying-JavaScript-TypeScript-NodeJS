// GET data request 
// this end point is a free api for testes , returs an array of users

let endpoint = 'https://jsonplaceholder.typicode.com/posts'

fetch(endpoint)
.then(response=>{
    if (!response.ok){
        throw new Error('Netwokr response was not ok');
    }
    return response.json() // parse data to json 
})
.then(data => console.log(data))
.catch(error => console.log(error))