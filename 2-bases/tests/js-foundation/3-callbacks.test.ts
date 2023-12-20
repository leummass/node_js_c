import { getUserById } from "../../src/js-foundation/3-callbacks";

describe('js-foundation/3-callbacks', () => {

    test('getUserById debe retornar error cuando el usuario no exista', (done) =>{
    
        const id = 10;

        getUserById( id, (err, user) =>{
            
            expect( err ).toBe(`USUARIO no encontrado con el id ${id}`);

            expect( user ).toBeUndefined();
            done();
        })
    });

    test('getUserById prueba de éxito, retorna usuario', () => {
        const id = 1;
        getUserById( id, (err, user) =>{
            
            expect( err ).toBeUndefined();

            //expect( user ).toBeDefined();

            expect( user ).toEqual({
                id: 1,
                name: 'John Doe',
            })
            
        })
        

    })
});


//done espera a que termine cualquier peticion o timeout del test
//es necesario llamarlo al final de todo sino fallará siempre