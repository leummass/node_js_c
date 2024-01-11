import {SaveFile} from './save-file.use-case'
import fs from 'fs'

describe('SaveFileUseCase', () => {
    beforeEach( () => {
        fs.rmSync('outputs', {recursive:true});
    })
    afterEach(() => {
        fs.rmSync('outputs',{recursive: true})
    })


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
})