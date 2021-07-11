import { FormGroup } from '@angular/forms';
export function usuarioSenhaIguaisValidator(formGroup: FormGroup){
  // ?? --> se o que eu estou buscando for undefined ele vai ser o que eu passar ali no caso vazio ''
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if(username.trim() + password.trim()){
    return username != password ? null : {senhaIgual: true}
  }else{
    return null
  }
}

