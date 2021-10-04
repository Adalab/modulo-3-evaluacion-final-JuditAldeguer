// posteriormente modificar url a https://rickandmortyapi.com/documentation/#get-all-characters

const callToApi = () => {
  return fetch(
    '//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'
  )
    .then((response) => response.json())
    .then((response) => {
      const result = response.results;
      return result;
    });
};

const callToApiEpisodes = (numEpisode) => {
  return fetch(`${numEpisode}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.name;
      return result;
    });
};

const objectToExport = {
  callToApi: callToApi,
  callToApiEpisodes: callToApiEpisodes,
};
export default objectToExport;
