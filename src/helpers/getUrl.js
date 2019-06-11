const getUrl = (url, params = {}) => (
  fetch(url, params)
    .then(response => response.json())
);

export default getUrl;
