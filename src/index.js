import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function getGiphy (userSearch) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearch}&limit=5&offset=0&rating=pg-13&lang=en`;

  request.addEventListener("loadend", function() {
    const apiResponse = JSON.parse(this.responseText);
    if (this.status === 200) {
        printGiphy(apiResponse);
    }
  })
  request.open("GET", url, true);
  request.send();
}

function printGiphy(apiResponse) {
  let results = document.querySelector('#displayGifs');
  apiResponse.data.forEach(element => {
    let newGif = document.createElement("img");
    newGif.setAttribute('src', element.images.fixed_height.url);
    results.append(newGif);

  });
}

function handleForm(event){
  event.preventDefault();
  const userSearch = document.querySelector("#searchTerm").value;
  document.querySelector('#searchTerm').value = null;
  document.getElementById('displayGifs').innerText= null;
  getGiphy(userSearch);
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleForm);
    
});