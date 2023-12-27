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
.parseSync()