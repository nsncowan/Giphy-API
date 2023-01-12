export default class GetGifs {
  static async gifSearch(searchTerm) {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${searchTerm}&limit=5&offset=0&rating=pg-13&lang=en`);
      const jsonResponse = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
      console.log(response);
      console.log(jsonResponse);
      return jsonResponse; 
    } catch(error) {
      return error;
    }
  }
}