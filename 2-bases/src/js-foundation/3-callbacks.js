const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

function getUserById( id, callback ) {
    const usuario = users.find( function (user) {
        return user.id === id;
    });
    
    if( !usuario ){
        return callback(`USUARIO no encontrado con el id ${id}`);
    }
    
    return callback(null, usuario);
}

module.exports = {
    getUserById
}