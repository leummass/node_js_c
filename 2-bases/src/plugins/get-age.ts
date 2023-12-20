//const getAgePlugin = require('get-age')


export const getAge = (birthdate:string) => {
    //if( !birthdate ) return new Error('La fecha es requerida');

    return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
