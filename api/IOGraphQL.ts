import IO from "./IO";

class IOGraphQL implements IO
{
    request:any;
    response:any;
    
    constructor(request, response = null)
    {
        this.request = request;
    }

    getInput(key)
    {
        return this.request.args[key];
    }

    getHeader(key){
        return this.request.context[key];
    }

    writeOutput(promise:Promise<any>)
    {
        return promise;
    }

   
}

export default IOGraphQL;