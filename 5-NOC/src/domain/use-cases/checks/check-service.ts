interface CheckServiceUseCase {
    execute( url: string ):Promise<boolean>;
}

type SuccessfulCallback = () => void;
type ErrorCallback = (error: string) => void;


export class CheckService implements CheckServiceUseCase{
    
    constructor(
        private readonly succesfulCallback: SuccessfulCallback,
        private readonly errorCallback: ErrorCallback
    ) {}


    async execute(url: string):Promise<boolean> {
        
        try {
            const req = await fetch( url );
            if(!req.ok){
                throw new Error ('Falló CheckService con la url: '+url);
            }

            this.succesfulCallback();
            return true;
        
        
        } catch (error){
            this.errorCallback(`${error}`);
            return false;
        }
        
    }
}