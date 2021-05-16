
export default interface IO {

    getInput(param:String);
    getHeader(headerName: String)
    writeOutput(response:Promise<any>);
}
