import { yarg } from "./args.plugin"


const runCommand = async (args: string[] ) => {
    process.argv = [...process.argv, ...args];
    const {yarg} = await import('./args.plugin');
    return yarg;
}

describe('pruebas args.plugin.ts', () => {
    const originalArgv = process.argv;
    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    })
    test('debe retornar los valores por defecto', async() => {
        const argv = await runCommand(['-b','5']);
        //console.log(argv)
        //console.log(yarg)
        expect(argv).toEqual( expect.objectContaining({
                b: 5,
                l: 10,
                s: false,
                n: 'table',
                d: './outputs',    
            })
        );
    })

    test('debe retornar los valores personalizados', async() => {
        const customArgv = await runCommand(['-b','10','-l','20','-s','-n','tabla-multiplicar','-d','outputtg']);

        expect(customArgv).toEqual( expect.objectContaining({
            b:10,
            l:20,
            s:true,
            n:'tabla-multiplicar',
            d:'outputtg',
        }));
    })
})