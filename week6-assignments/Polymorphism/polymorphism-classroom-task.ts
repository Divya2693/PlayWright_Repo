class DemoOverloading {

    reportStep(message : string, status : string) : void
    reportStep(message : string, status : string, snap : boolean) : void

    reportStep(message : string, status?: string, snap?: boolean) : void {
        if(snap){
        console.log(`The message is ${message} and the status is ${status}`);
        } else
            console.log(`The message is ${message} and the status is ${status}`);
    }
}

const objDemo = new DemoOverloading()
objDemo.reportStep("Hi there", "Completed", true)
objDemo.reportStep("Hi there", "Not Completed", false)
objDemo.reportStep("Hi there", "I am 2 parameter")
