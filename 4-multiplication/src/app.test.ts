import { ServerApp } from "./presentation/server-app";

describe('test de app.ts', () => {
    test('debe llamar ServerApp.run con valores personalizados ', async() => {
        
        const serverRunMock = jest.fn();

        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '10', '-l','5','-s','-n','test-file','-d','otput']

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 10,
            limit: 5,
            showTable: true,
            name: 'test-file',
            destination:'otput',
        })

    })
});