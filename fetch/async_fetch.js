async function fetchData() {
    // Declaramos a função como assíncrona usando "async".
    try {
      // Fazemos uma requisição com "fetch" e usamos "await" para esperar a resposta.
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Verificamos se a resposta foi bem-sucedida.
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Convertemos a resposta em JSON (também uma operação assíncrona, por isso usamos "await").
      const data = await response.json();
  
      // Exibimos os dados no console.
      console.log(data);
    } catch (error) {
      // Lidamos com qualquer erro que tenha ocorrido (na requisição ou no parse do JSON).
      console.error('Error:', error.message);
    }
  }
  
  // Chamamos a função assíncrona.
  fetchData();
  