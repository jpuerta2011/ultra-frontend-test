import { FormGroup } from "@angular/forms";

export class FormValidation {

    public form: FormGroup = new FormGroup({});

    constructor() {}

    hasError(control: string, error: string) {
        return this.form.controls[control].hasError(error);
    }
}