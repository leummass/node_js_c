import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe('plugins/http-client.plugin.ts', () => {
    test('httpClientPlugin debe de retornar un string', async() =>{
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
        expect( data ).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
            });
    })

    test('httpClientPlugin debe tener los métodos de POST, PUT y DELETE', () => {
        
        expect( typeof httpClientPlugin.delete ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function');
        expect( typeof httpClientPlugin.post ).toBe('function');
    })
})