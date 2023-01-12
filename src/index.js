import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetGifs from './get-gifs';

async function gifSearch(searchTerm) {
  const response = await GetGifs.gifSearch(searchTerm);
  console.log(response);
  if (response.status) {
    printGiphy(response, searchTerm);
  } else {
   // printError(response, searchTerm); 
  }
}




// function getGiphy (userSearch) {
//   let request = new XMLHttpRequest();
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${userSearch}&limit=5&offset=0&rating=pg-13&lang=en`;

//   request.addEventListener("loadend", function() {
//     const apiResponse = JSON.parse(this.responseText);
//     if (this.status === 200) {
//         printGiphy(apiResponse);
//     }
//     else {
//       document.getElementById('displayGifs').innerText = `Error Message: ${this.status}. Rub your magic lamp and try again, my friend.`;
//     }
//   });
//   request.open("GET", url, true);
//   request.send();
// }


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
  const searchTerm = document.querySelector("#searchTerm").value;
  document.querySelector('#searchTerm').value = null;
  document.getElementById('displayGifs').innerText= null;
  gifSearch(searchTerm);
}

window.addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleForm);
    
});