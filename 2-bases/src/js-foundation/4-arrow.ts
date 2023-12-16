interface User {
    id:number;
    name:string;
}
const users:User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

export const getUserById = ( id:number, callback: (err?: string, user?:User) => void ) => {
    const usuario = users.find( (user) => {
        return user.id === id;
    });
    if(!usuario){
        return callback(`USUARIO no encontrado con el id ${id}`)
    }
    return callback(undefined,usuario);
}
    

