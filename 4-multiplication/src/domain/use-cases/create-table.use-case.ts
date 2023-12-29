export interface CreateTableUseCase{
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions{
    base: number;
    limit?:number;
}


export class CreateTable implements CreateTableUseCase{

    constructor(){

    }
    //método para ejecutar el caso de uso
    execute({base, limit = 10}:CreateTableOptions){//datos necesarios para crear la tabla de multiplicar
        let texto = '';
        for(let i = 1; i<=limit;i++){
            texto+= `\n${base} x ${i} = ${base*i}`
        }
        return texto;
    }
}