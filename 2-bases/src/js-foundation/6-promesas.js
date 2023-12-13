
const getPokemonById = (id) => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    return fetch(urlapi)
        .then( ( response ) => response.json()) 
        //.then( () => {throw new Error(' No existe dicho pokemon ')})
        .then( ( pokemon ) => pokemon.name );

    //return 'Pokemonne'
}


module.exports = {
    getPokemonById,
}