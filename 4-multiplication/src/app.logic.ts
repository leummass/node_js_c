import * as fs from 'fs';


const message: string = 'Hola';

console.log("====================");
console.log("Tabla del 5")
console.log("====================");
let texto: string = "===================="
texto = texto + "\nTabla del 5"
texto = texto + "\n===================="
for(let i = 1; i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
    texto+= `\n5 x ${i} = ${5*i}`
}

const outputPath = 'outputs'
fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/archivo.txt`,texto);