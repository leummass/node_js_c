import * as fs from 'fs';
import { yarg } from './config/plugins/args.plugin';


//Se ponen dos puntos y el parámetro que son para que no haya problema con el tipado
const {b:base, l:limit, s:show} = yarg;

let texto: string = "===================="
texto = texto + `\nTabla del ${base}`
texto = texto + "\n===================="
for(let i = 1; i<=limit;i++){
    texto+= `\n${base} x ${i} = ${base*i}`
}

if(show){
    console.log(texto);
}

const outputPath = 'outputs';
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/archivo.txt`,texto);