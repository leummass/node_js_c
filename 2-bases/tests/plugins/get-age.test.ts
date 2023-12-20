import { getAge } from "../../src/plugins";


describe('plugins/get-age.ts', () => {
    
    test('getAge() debe retornar la edad de la persona en base a la fecha provista', () => {

        const birthdate = '2001-01-01';
        const age = getAge(birthdate);

        expect(typeof age).toBe('number');


    });

    test('getAge() debe retornar la edad actual', () => {
        const birthdate = '2001-01-01';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect(age).toBe(calculatedAge);
    })

    test('getAge() debe retornar 0 años', () => {
        //Modifica el valor de retorno en el ambiente actual, en este caso, getFullYear donde sea que se utilice dentro de este ambiente será 1995
        const spy = jest.spyOn(Date.prototype,'getFullYear').mockReturnValue(1995);

        const birthdate ='1995-10-21';
        const age = getAge(birthdate);
        //Como getFullYear retora siempre el valor de 1995 por el uso del spyOn, la resta siempre será 1995-1995 lo cual da 0

        expect(age).toBe(0);

    })
});