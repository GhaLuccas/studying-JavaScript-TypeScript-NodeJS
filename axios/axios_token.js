const AxiosToken = async () => {
    let url = 'https://example.com/protected'
    let token = "YOUR_ACCESS_TOKEN"

    try{
        let response = await axios.get(url, {
            headers :{
                "Authorization" : `Bearer ${token}`,
            }
        })
        console.log(response.data)
    }catch(erro){
        console.log(`Error fetching protected data ${erro.message}`)
    }
}

AxiosToken()