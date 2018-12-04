class Adapter {
  constructor(){
    this._baseUrl = `http://localhost:3000/api/v1`
  }

  getAll(){
    let url = `${this._baseUrl}/categories`
    console.log(url);
    let options = {method: 'GET'}
    return this._fetchJSON(url, options)
  }


  _fetchJSON(url, options){
    return fetch(url, options)
      .then(res => res.json())
  }




}
