export default class API {
  static get(url, headers={}) {
    if (!url) {
      throw new URIError(`API.get - url is \`${url}\``)
    }

    headers = {
      ...headers
    }

    return fetch(url, {
      headers
    })
  }

  static post(url, headers={}, body={}) {
    if (!url) {
      throw new URIError(`API.post - url is \`${url}\``)
    }
  }

  static put(url, headers={}, body={}) {
    if (!url) {
      throw new URIError(`API.put - url is \`${url}\``)
    }
  }

  static delete(url, headers={}, body={}) {
    if (!url) {
      throw new URIError(`API.delete - url is \`${url}\``)
    }
  }
}
