const {http} = require('../plugins')

export const getPokemonById = async (id: number): Promise<string> => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/${ id }`;

    // const response = await fetch ( urlapi );
    // const pokemon = await response.json();

    const pokemon = await http.get(urlapi);
    return pokemon.name;

    // return fetch(urlapi)
    //     .then( ( response ) => response.json()) 
    //     //.then( () => {throw new Error(' No existe dicho pokemon ')})
    //     .then( ( pokemon ) => pokemon.name );

    //return 'Pokemonne'
}

