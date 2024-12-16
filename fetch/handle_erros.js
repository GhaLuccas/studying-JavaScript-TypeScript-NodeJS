// Handling Errors Gracefully

fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
.then( response=>{
    if (response.ok){
        return response.json()
    }
    throw new Error(`HTTP error: ${response.status} `)
})
.catch(error => console.log(error))