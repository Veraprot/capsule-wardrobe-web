class JSONAPIAdapter{
  constructor(baseURI){
    this.baseURI = baseURI
  }
  getAll() {
      return this._send(this.baseURI, {
        method: 'GET'
      })
    }

  postItem(obj) {
    return this._send(`${this.baseURI}/${obj.category_id}/items`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  delete(itemId, catId){
    return fetch(`${this.baseURI}/${catId}/items/${itemId}`, {method: 'DELETE'})
  }

  _send(endpoint, options) {
      return fetch(endpoint, options)
        .then(r => {
          if (r.ok) {
            return r.json();
          } else {
            throw r
          }
        })
    }

}
