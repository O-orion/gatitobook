import { AbstractControl } from "@angular/forms";

export  function miniusculoValidator(control: AbstractControl){
  const valor = control.value as string;
  if(valor != valor.toUpperCase()){
    return { minusculo: true};
  }else{
    return null;
  }
}
