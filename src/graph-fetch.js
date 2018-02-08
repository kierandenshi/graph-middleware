import 'whatwg-fetch';

export default (graphqlUrl) => {

  return (query = null, vars = {}, opts = {}) => {

    // TODO: carp if !query

    opts.body = JSON.stringify({
      query: query,
      variables: vars,
    });
    // default opts
    const defaults = {
      method: 'POST',
      headers: new Headers()
    };
    // default headers
    const options = Object.assign(defaults, opts);

    const headers = options.headers;
    if (!headers.get('content-type')) {
      options.headers.append('content-type', 'application/json')
    };
    return fetch(graphqlUrl, options).then((response) => {
      return response.json().then((json) => {
        return { response, json };
      }).then(({ response, json }) => {
        if(!response.ok) {
          return Promise.reject({ response, json });
        }
        return json.data;
      })
    }).catch((e) => {
      console.log(e);
    });
  }
}
