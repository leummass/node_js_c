import {CreateTable} from './create-table.use-case'

describe('CreateTableUseCase', () => {

    test('Debe crear una tabla con los valores por default', () => {
        const createTable = new CreateTable();
        const table = createTable.execute({base: 5});
        const rows = table.split('\n').length
        console.log(table);
        //Verifica que sea una instancia de dicha clase
        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('5 x 1 = 5');
        expect(table).toContain('5 x 10 = 50');
        expect(rows).toBe(10);
    })


    test('Debe crear una tabla con valores diferentes', () => {
        const createTable = new CreateTable();

        const options = {
            base: 5,
            limit: 30
        }
        const table = createTable.execute(options);

        const rows = table.split('\n').length


        expect(table).toContain('5 x 1 = 5');
        expect(table).toContain('5 x 10 = 50');
        expect(table).toContain('5 x 20 = 100');
        expect(rows).toBe(options.limit);
    })
})