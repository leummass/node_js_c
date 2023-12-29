import {yarg} from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

// console.log(process.argv);



//Función anónima autoinvocada
( async() => {
    await main();
    console.log('Ejecutando');
})();

async function main() {

    const {b:base, l:limit, s:showTable, n:name, d:destination} = yarg;
    ServerApp.run({base, limit, showTable, name, destination});
}