import yargs from 'yargs';

import { hideBin } from 'yargs/helpers';



//hideBin oculta las carpetas de source
export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias:'base',
    type:'number',
    demandOption: true,
    describe:'Base de la tabla'
})
.option('l',{
    alias:'limit',
    type:'number',
    default:10,
    describe:'Limite de tabla para multiplicar'
})
.option('s',{
    alias: 'show',
    type:'boolean',
    default:false,
    describe: 'Mostrar tabla de mutliplicación'
})
.option('n',{
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Nombre del archivo'
})
.option('d',{
    alias: 'destination',
    type:'string',
    default: './outputs',
    describe: 'Ubicación del archivo'
})
.check((argv,options) => {
    if(argv.b < 1) throw 'Error: el valor de la base tiene que ser mayor a 0';

    return true;
})
.parseSync()

//check nos sirve para verificar las opciones recibidas