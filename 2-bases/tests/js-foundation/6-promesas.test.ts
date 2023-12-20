import { getPokemonById } from "../../src/js-foundation/6-promesas";

describe('js-foundation/6-promesas', () => {

    test('getPokemonById debe retornar un pokemon', async() => {

        const pokemonid = 1;
        const pokemon = await getPokemonById( pokemonid );

        expect(pokemon).toBe('bulbasaur');
        // La prueba consiste en que se realice la petición http por medio de getPokemonById
        // y retorne el nombre del pokémon
    
    });

    test('getPokemonById debe retornar un error si el pokemon no existe', async () => {
        const pokemonid = 99999;
        try {
            const pokemonName = await getPokemonById(pokemonid);
            expect(true).toBeFalsy();
        }catch(error){
            expect(error).toBe(`Pokemon no encontrado con el id: ${pokemonid}`)
        }
        
    });
});