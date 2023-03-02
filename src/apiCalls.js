const fetchData = (searchInput) => {
    
    const url = 'https://api.openbrewerydb.org/breweries'

    return fetch( `${url}?by_city=${searchInput}` )
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error(`There was an error: status ${response.status}`)
            }
        }
    )
}

export { fetchData }