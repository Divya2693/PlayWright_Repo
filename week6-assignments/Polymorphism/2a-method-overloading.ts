class APIClient {

    sendRequest(endpoint : string) : void
    sendRequest(endpoint : string, requestBody : string, requestStatus : boolean) : void
    sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {
        if(requestStatus){
            console.log(`The request body is ${requestBody} and the end point is  ${endpoint}`)
        } else
             console.log(`The request body is ${requestBody} and the end point is  ${endpoint}`)
    }

}

const objApiClient = new APIClient()
objApiClient.sendRequest("Single argument")
objApiClient.sendRequest("Prod endpoint", "prod requestBody", true)
objApiClient.sendRequest("boolean false endpoint", "qa requestBody", false)