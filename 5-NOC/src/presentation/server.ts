
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";

export class Server {
    
    static start() {

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com'
                new CheckService(
                    () => console.log(`${url} está OK`),
                    ( error ) => console.log(error)
                ).execute(url);
                //new CheckService().execute('http://localhost:3000');
            }
        );

        CronService.createJob(
            '*/2 * * * * *',
            () => {
                const date = new Date();
                console.log('2 seconds tick ', date);
            }
        );

        CronService.createJob(
            '*/4 * * * * *',
            () => {
                const date = new Date();
                console.log('4 seconds tick ', date);
            }
        );

    }
}