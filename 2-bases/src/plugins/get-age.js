const getAgePlugin = require('get-age')


const getAge = (birthdate) => {
    if( !birthdate ) return new Error('La fecha es requerida');

    return getAgePlugin(birthdate);
}

module.exports = {
    getAge,
}