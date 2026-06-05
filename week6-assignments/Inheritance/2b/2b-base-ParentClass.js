export class WebComponent {
    selector;
    constructor(selector) {
        this.selector = "element";
    }
    click() {
        console.log("Clicking on the element in parent class");
    }
    focus() {
        console.log("Focusing on the element");
    }
}
