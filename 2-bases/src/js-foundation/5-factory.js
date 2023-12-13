//

const buildMakePerson = ({uuidv4, getAge}) => {
    return ({name, birthdate}) => {

        return {
            id: uuidv4(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    
    }
}

module.exports = {
    buildMakePerson,
}
