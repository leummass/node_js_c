interface User{
    id: number;
    name: string;
}

export const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

export function getUserById  ( id:number, callback: (err?: string, user?:User) => void) {
    const usuario = users.find( function (user) {
        return user.id === id;
    });
    
    if( !usuario ){
        return callback(`USUARIO no encontrado con el id ${id}`);
    }
    
    return callback(undefined, usuario);
}
