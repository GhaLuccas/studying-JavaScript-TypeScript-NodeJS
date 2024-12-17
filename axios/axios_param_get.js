// AXIOs trata erros atutomaticamente sem necesidade do if (response.ok) 

const AxiosGetParam = async () => {
    const BaseUrl = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await axios.get(BaseUrl, {
        params: { id: 1 },
        });

      console.log(response.data); // Exibe os dados no console
    } catch (erro) {
      console.log(`ERRO: ${erro.message}`); // Trata os erros
    }
    };

AxiosGetParam();
