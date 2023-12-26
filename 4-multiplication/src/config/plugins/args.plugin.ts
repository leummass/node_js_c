import yargs from 'yargs';

import { hideBin } from 'yargs/helpers';
//hideBin oculta las carpetas de source
export const yarg = yargs(hideBin(process.argv))
.parseSync()