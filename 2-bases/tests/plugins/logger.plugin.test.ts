import { buildLogger, logger as winstonLogger } from "../../src/plugins/logger.plugin";

describe('plugins/logger.plugin.ts', () => {
    test('buildLogger debe retornar una función logger', () => {
        const logger = buildLogger('test');

        expect(typeof logger.log).toBe('function');

        expect(typeof logger.error).toBe('function');
    })



    test('logger.log debe hacer log con un mensaje', () => {


        const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
        const message = 'test message';
        const service = 'test service';

        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith(
            'info',
            expect.objectContaining({
                level: 'info',
                message,
                service,
            })
        );



    })
})