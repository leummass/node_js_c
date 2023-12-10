const fs = require('fs')

// fs = file system

const content = fs.readFileSync('readme.md', 'utf-8');

const wordCount = content.split(' ');

console.log('Palabras: ', wordCount.length);

const reactWordCount = wordCount.filter( (word) => word.toLowerCase().includes('react')).length;

const reactWordCount2 = content.match(/react/gi ?? []).length

console.log('La palabra react aparece un total de :',reactWordCount," veces")

console.log('La palabra react aparece un total de :',reactWordCount2," veces")