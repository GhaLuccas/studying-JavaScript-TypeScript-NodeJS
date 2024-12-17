const Token = async () => {
  const url = "https://example.com/protected";
  const headers = {
    Autorization: "Bearer YOU_ACCESS_TOKEN",
  };

  try {
    const response = await fetch(url, { method: "GET", headers });
    if (response.ok) {
      data = await response.json();
      console.log(data);
    } else {
      throw new Error(`HTTP Failed: ${response.status}`);
    }
  } catch (error) {
    console.log(`ERROR : ${error.massage}`);
  }
};
Token();
