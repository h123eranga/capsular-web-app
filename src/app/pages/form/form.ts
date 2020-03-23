import { Input } from "../../../../../capsular/src/dom_elements";
import { InputTypeAttribute } from "../../../../../capsular/src/attributes";

export class FormTest {
    build() {
        return new Input({
           type: InputTypeAttribute.text
        });
    }
}