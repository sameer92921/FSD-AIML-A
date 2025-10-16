const url = "https://api.github.com/users/sameer92921";

const response = await fetch(url);
response.json().then(data => console.log(data));
