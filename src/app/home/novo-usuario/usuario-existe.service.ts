import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUserService: NovoUsuarioService) { }

  //vai retorna uma função
  usuarioExistente(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => this.novoUserService.verificaUsuarioExistente(nomeUsuario)),
        map((useExiste) => (useExiste ? {usuarioExistente: true} : null)),
        first()
      );
    }
  }

}
