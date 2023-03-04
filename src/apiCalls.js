const getData = (searchInput) => {

  fetch(`https://api.openbrewerydb.org/breweries?by_state=${searchInput}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`There was an error: status ${response.status}`);
      }
      return response.json();
    }
  );
};

export default getData;
