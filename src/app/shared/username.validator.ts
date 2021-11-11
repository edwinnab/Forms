import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl): {[key: string]: any} | null {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { 'forbidden': {value: control.value}} : null;

}
