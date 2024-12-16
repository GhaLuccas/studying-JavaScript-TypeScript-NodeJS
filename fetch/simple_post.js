// Sending Data with a POST Request
// in post request we have to configure the request 

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST" , // the method
    headers: {
        "Content-Type" : "application/json" ,   // Specify content type
    } ,
    body: JSON.stringify({
        title: "im the tile",
        body: "im the body",
        userId : 1,
    }) // convert the object to JSON 
})
.then(response => response.json())
.then(data => console.log(data))
.then(error => console.log(error))


