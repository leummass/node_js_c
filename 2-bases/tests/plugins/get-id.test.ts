import { uuidv4 } from "../../src/plugins";

describe('plugins/get-id.ts', () => {
    test('uuidv4() debe de regresar un UUID', () => {
        const uuid = uuidv4();

        expect(typeof uuid).toBe('string');

        expect(uuid.length).toBe(36);
    })
})