import {httpClientPlugin} from '../plugins/http-client.plugin';

export const getPokemonById = async (id: number): Promise<string> => {
    try{
        const urlapi = `https://pokeapi.co/api/v2/pokemon/${ id }`;
        const pokemon = await httpClientPlugin.get(urlapi);
        return pokemon.name;
    } catch (error){
        throw `Pokemon no encontrado con el id: ${id}`
    }

    // const response = await fetch ( urlapi );
    // const pokemon = await response.json();


    // return fetch(urlapi)
    //     .then( ( response ) => response.json()) 
    //     //.then( () => {throw new Error(' No existe dicho pokemon ')})
    //     .then( ( pokemon ) => pokemon.name );

    //return 'Pokemonne'
}


