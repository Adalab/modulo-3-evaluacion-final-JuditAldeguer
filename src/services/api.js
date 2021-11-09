const callToApi = (pageNum) => {
  return fetch(`//rickandmortyapi.com/api/character/?page=${pageNum}`)
    .then((response) => response.json())
    .then((response) => {
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
