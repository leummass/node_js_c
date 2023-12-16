export {getAge} from './get-age';
export {uuidv4} from './get-id';
export {httpClientPlugin as httpClient} from './http-client.plugin';
export {buildLogger} from './logger.plugin'


// ! Versión JS
// const {uuidv4} = require('../plugins/get-id');
// const { getAge } = require('../plugins/get-age');
// const { http } = require('../plugins/http-client.plugin')
// //se pone sin llaves ya que es una función lo que se 
// //exporta y solamente será eso
// const buildLogger = require('../plugins/logger.plugin')

// module.exports = {
//     uuidv4,
//     getAge,
//     http,
//     buildLogger,
// }