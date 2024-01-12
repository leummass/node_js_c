import {SaveFile} from './save-file.use-case'
import fs from 'fs'

describe('SaveFileUseCase', () => {
    
    const customOptions = {
        fileContent: 'prueba',
        path: 'outputters',
        fileName: 'bottomtext'
    }
    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) fs.rmSync('outputs',{recursive: true});
    });
    afterEach(() => {
        const customOutputFolderExists = fs.existsSync('outputs');
        if (customOutputFolderExists) fs.rmSync('outputs',{recursive: true});
    });
    

    test('debe guardar el archivo con los valores predeterminados', () => {
        const saveFile = new SaveFile();
        const options = {
            fileContent: 'prueba'
        }
        const result = saveFile.execute(options);
        const filePath = 'outputs/archivo.txt'
        expect(result).toBe(true);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'})
        
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    })

    test('debe guardar el archivo con valores distintos a los predeterminados', () => {
        

        const saveFile = new SaveFile();
        const result = saveFile.execute(customOptions); //Verificar si retornó true, ya que true significa que creó el archivo
        const filePath = `${customOptions.path}/${customOptions.fileName}.txt`; //Verificar que esté en la ruta especificada
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, {encoding: 'utf-8'});

        expect(result).toBe(true);
        expect(checkFile).toBe(true);
        expect(fileContent).toBe(customOptions.fileContent);
    })


    test('debe retornar falso si el archivo no se crea', () => {
        const saveFile = new SaveFile();
        
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
            () => { throw new Error('Custom error message from testing')}
        )

        const result = saveFile.execute(customOptions);
        expect(result).toBe(false);

        mkdirSpy.mockRestore();
        //La diferencia entre mockRestore y mockReset es que el restore además de resetearlo lo devuelve a su estado original
    })

    test('debe retornar falso si el archivo no se crea', () => {
        const saveFile = new SaveFile();
        
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
            () => { throw new Error('Custom error message from testing, writeFileSync')}
        )

        const result = saveFile.execute({fileContent:'Hola'});
        expect(result).toBe(false);

        writeFileSpy.mockRestore();
    })
})