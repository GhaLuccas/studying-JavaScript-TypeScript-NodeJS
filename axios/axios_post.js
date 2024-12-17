const AxiosPost = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const payload = {
        "title": 'im the title',
        "body" : 'im the body',
        userID : 1,
    }
    try{
        const response = await axios.post( url , payload )
        console.log(response.data)
    }catch(erro){
        console.log(`ERRO: ${erro}`)
    }
}

AxiosPost()