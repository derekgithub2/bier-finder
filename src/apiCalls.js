const searchInput = 'oregon'
const url = 'https://api.openbrewerydb.org/breweries'

const fetchData = () => {

    return fetch( `${url}?by_state=${searchInput}` )
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