import winston, {format} from 'winston'

//const winston = require('winston'); codigo js
const { combine, timestamp, json} = winston.format;
//se exporta el logger para cuestiones de pruebas
export const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }
logger.add(new winston.transports.Console({
    format: winston.format.simple(),
}));

//funcion que recibe el servicio en el que se disparó el error y retorna un log con el tipo, mensaje y el servicio
export const  buildLogger = (service:string) => {

    return {
        log: (message:string)=> {
            logger.log('info', {message, service});
        },
        error: (message:string) => {
          logger.error('error', {
            message, 
            service,
            at: new Date().toISOString(),
          });
        },

    }
}