import { buildMakePerson } from "../../src/js-foundation/5-factory";

describe('js-foundation/5-factory', () => {
    const uuidv4 = () => '1234';
    const getAge = () => 22
    test('buildMakePerson debe retornar una función', () =>{
        
        
        const makePerson = buildMakePerson({uuidv4, getAge});

        expect(typeof makePerson).toBe('function')

    });

    test('makePerson debe de retornar una persona', () => {
        const makePerson = buildMakePerson({uuidv4, getAge});
        const persona = makePerson({name: 'John Doe', birthdate: '2001-01-01'});
        //console.log(persona)

        expect( persona ).toEqual({ id: '1234', name: 'John Doe', birthdate: '2001-01-01', age: 22 });

    })
});