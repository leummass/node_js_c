//
interface BuildMakerPersonOptions {
    uuidv4: () => string;
    getAge: (birthdate:string) => number;
}
interface PersonOptions {
    name:string;
    birthdate:string;
}

export const buildMakePerson = ({uuidv4, getAge}: BuildMakerPersonOptions) => {
    return ({name, birthdate}: PersonOptions) => {

        return {
            id: uuidv4(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    
    }
}


