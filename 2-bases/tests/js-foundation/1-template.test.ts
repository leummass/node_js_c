import { emailTemplate } from "../../src/js-foundation/1-template";

describe("js-foundation/1-template.ts", () => {
    test('emailTemplate should contain a greeting',  () =>{
        expect( emailTemplate).toContain('Hola, ');
    });

    test('emailTemplate should contain {{name}}', () => {

        expect(emailTemplate).toMatch(/{{name}}/);

    });
});