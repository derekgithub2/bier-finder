const getData = (searchInput) => {

    // let url 
    // // = 'https://api.openbrewerydb.org/breweries?by_state='

    // let path;

    // if (!searchInput) {
    //     url = ''
    //     path = ''

    //     console.log("error in conditional in apiCalls")
    // } else {
    //     console.log('in APIcalls, else statement hit')
    //     url = 'https://api.openbrewerydb.org/breweries?by_state='
    //     path = searchInput
    // }


    fetch( `https://api.openbrewerydb.org/breweries?by_state=${searchInput}` )
    .then(response => {
        if(!response.ok) {
            throw new Error(`There was an error: status ${response.status}`)
        }
        return response.json()
    })

}

export default getData