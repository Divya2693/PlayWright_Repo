import { WebComponent } from "./2b-base-ParentClass.js";

class TextInput extends WebComponent {
    value = "";

        constructor() {
        super("element");
    }

    enterText(text: string) {
        this.value = text;
        console.log(`Entering text: ${text}`);
    }
}

const objTextInput = new TextInput();
objTextInput.enterText("admin");
objTextInput.click();
objTextInput.focus();