const randomGiphyApiPath = 'https://api.giphy.com/v1/gifs/random';
const getObjectFromJson = response => response.json();

const throwIfNotOk = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

const sleep = (msecs) => (
  results => new Promise(resolve => setTimeout(() => resolve(results), msecs))
);

const getUrl = response => response.data.fixed_height_downsampled_url;

const loadGiphy = (query) => {
  const encodedQuery = encodeURIComponent(query);
  const url = `${randomGiphyApiPath}?api_key=dc6zaTOxFJmzC&tag=${encodedQuery}`;
  return fetch(url)
    .then(throwIfNotOk)
    .then(getObjectFromJson)
    .then(getUrl)
    .then(sleep(1000));
};

export default loadGiphy;
