const FetchUrl = async()=>{
    const BaseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const params =  new URLSearchParams({ userId: 1 }); // Add query params

    try{
        const response = await fetch(`${BaseUrl}?${params}`);
        if (response.ok){
            const data = await response.json();
            console.log(data);
        }else {
            throw new Error("HTTP Failed : ",response.status);
        }
    }catch(erro){
        console.log("ERROR : ",erro);
    }
}

FetchUrl()