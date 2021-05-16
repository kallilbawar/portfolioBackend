import IO from "./IO";

class IORest implements IO
{
    request:any;
    response:any;
    
    constructor(request, response)
    {
        this.request = request;
        this.response = response;
    }

    getInput(key)
    {
        return this.request?.body?.[key];
    }
    getHeader(headerName){
        
    }

    writeOutput(promise:Promise<any>)
    {
        promise.then(response => {
            this.response.status(200).send(JSON.stringify(response));
        })
        .catch(error => {
            this.response.status(500).send(JSON.stringify(error));
        });
    }
}

export default IORest;