import {yarg} from './config/plugins/args.plugin';

// console.log(process.argv);



//Función anónima autoinvocada
( async() => {
    await main();
    console.log('Ejecutando');
})();

async function main() {
    console.log(yarg);
}