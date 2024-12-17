const AxiosGetAll = async () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (erro) {
        console.log(`ERRO : ${erro.message}`);
    }
};

AxiosGetAll();
