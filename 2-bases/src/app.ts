//const { emailTemplate } = require('./js-foundation/1-template');
//require('./js-foundation/2-destructuracion')
//const { getUserById } = require('./js-foundation/3-callbacks')
//console.log(emailTemplate)

import { buildLogger } from "./plugins/logger.plugin"


// ! const { getUserById } = require('./js-foundation/4-arrow')
// const id = 1;

// getUserById(id, (error, usuario) => {
//     if(error) throw new Error(error);
//     console.log({usuario});
// });

// ! Ejemplo factory functions
// const {uuidv4, getAge} = require('./plugins');
// const {buildMakePerson} = require('./js-foundation/5-factory')

// const makePerson = buildMakePerson({uuidv4,getAge});

// const obj = {name: 'John', birthdate: '2001-01-01'}

// const john = makePerson(obj);

// console.log({john})

// ! Promesas
// const {getPokemonById} = require('./js-foundation/6-promesas')

// getPokemonById(401).
//     then( (pokemon) => console.log({pokemon})).
//     catch( (err) => console.log({err}))

// ! Logger
// const {buildLogger} = require('./plugins')

// const logger = buildLogger('app.js');

// logger.log('Hola mundo');

// logger.error('ERROR. ERROR.')

// console.log('Hola')


