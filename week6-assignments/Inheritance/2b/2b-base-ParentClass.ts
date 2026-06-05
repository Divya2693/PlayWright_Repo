export class WebComponent{

    selector : string

    constructor(selector: string){
        this.selector = "element";
    }

    click(){
        console.log("Clicking on the element in parent class")
    }
            focus() {
            console.log("Focusing on the element")
        }

}