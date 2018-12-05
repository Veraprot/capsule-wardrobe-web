class JSONAPIAdapter{
  constructor(baseURI){
    this.baseURI = baseURI
    this.defaultHeaders = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
  }
  getAll() {
      return this._send(this.baseURI, {
        method: 'GET'
      })
    }

  _send(endpoint, options) {
      return fetch(endpoint, options)
        .then(r => {
          if (r.ok) {
            return r.json()
          } else {
            throw r
          }
        })
    }

}
