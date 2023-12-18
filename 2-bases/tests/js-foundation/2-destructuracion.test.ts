import { characters } from "../../src/js-foundation/2-destructuracion";

describe('js-foundation/2-destructuracion.ts', () => {

    test('characters debe contener a Flash, Superman', () => {
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman')
        //verifica que el arreglo contenga a los dos miembros especificados
    });

    test('Comprobar que el primer personaje es Flash y el segundo Superman', () => {
        //Se aplica desestructuración para obtenerlos en orden

        const [flash, superman] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
        

    })
});