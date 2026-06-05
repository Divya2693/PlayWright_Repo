import {WebComponent} from "./2b-base-ParentClass.js"

export class Button extends WebComponent{
    click(){
        console.log("Clicking on the element in child class")
    }
    }