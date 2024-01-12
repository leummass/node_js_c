
import { ServerApp } from "./server-app"

import { CreateTable } from "../domain/use-cases/create-table.use-case";

import { SaveFile } from "../domain/use-cases/save-file.use-case";




describe('pruebas en server-app', () => {

    const options = {
        base: 5,
        limit: 20,
        showTable: true,
        destination: 'op',
        name:'test',
    }
    beforeEach(() => {
        jest.clearAllMocks();
    })


    test('se debe crear la instancia de ServerApp', () => {

        const serverApp = new ServerApp();

        expect( serverApp ).toBeInstanceOf(ServerApp)
        expect(typeof  ServerApp.run ).toBe('function')
    })


    test('Debe correr el servidor con opciones que se le envíen', () => {

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute');

        
        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(2);

        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({base: options.base, limit:options.limit});

        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     fileName: options.name,
        //     path: options.destination,
        // });
    })

    test('debe correc con valores personalizados', () => {
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createMock = jest.fn().mockReturnValue('1 x 2 = 2'); 
        const saveFileMock = jest.fn();
        
        console.log=logMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute=saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith("No se pudo crear el archivo");

        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit})

        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            path: options.destination,
            fileName: options.name,
        });

        expect( logErrorMock).not.toHaveBeenCalledWith();

    })
})