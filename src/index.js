function getGiphy (userSearch) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q={userSearch}&limit=5&offset=0&rating=pg-13&lang=en`;

  request.addEventListener("loadend", function() {
    const apiResponse = JSON.parse(this.responseText);
    if (this.status === 200) {
        printGiphy(apiResponse);
    }
  })
}
function printGiphy(apiResponse) {
  let results = document.querySelector('#displayGifs');
  apiResponse.data.forEach(element => {
    results.append(element.embed_url);
  });
}

function handleForm(e){
    e.preventDefault();
    const userSearch = document.querySelector("#searchTerm").value;
    document.querySelector('#searchTerm').value = null;
    getGiphy(userSearch);
}

window.addEventListener('load', function() {
    this.document.querySelector('form').addEventListener('submit', handleForm);
})