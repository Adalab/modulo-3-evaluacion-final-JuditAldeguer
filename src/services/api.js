// info en https://rickandmortyapi.com/documentation/#get-all-characters --> https://rickandmortyapi.com/api/character

const callToApi = (pageNum) => {
  return fetch(`//rickandmortyapi.com/api/character/?page=${pageNum}`)
    .then((response) => response.json())
    .then((response) => {
      // const result = response.results;
      // return result;
      return response;
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
