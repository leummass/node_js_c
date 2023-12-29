import fs from 'fs'

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions)=> boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    path?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase{

    constructor(){

    }

    execute({fileContent, path= 'outputs', fileName= 'archivo'}: SaveFileOptions): boolean{
        try{
            fs.mkdirSync(path, {recursive: true});
            fs.writeFileSync(`${path}/${fileName}.txt`,fileContent);
            
            return true;
        }
        catch( error ){
            console.error(error);
            return false;
        }
    }
}