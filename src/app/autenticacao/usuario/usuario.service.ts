import { Usuario } from './usuario';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarioSubject = new BehaviorSubject<Usuario>({});
  //injeta o serviço de token
  //BehaviorSubject --> quase igual observable, mais ele pode enviar dados e guarda ados
  //ele recebe guarda e envia
  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }
  //

  //pega informação o token e decodifica a informação
  private decodificaJWT(){
    const token = this.tokenService.retornaToken()
    //biblioteca JWT
    const usuario = jwt_decode(token) as Usuario //casting para usuario
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable(); //transformando em um observable
    //assim apenas recebe informação, não permiti alguem manipular ele no browser
  }

  salvarToken(token:string){
    this.tokenService.salvarToken(token);
    this.decodificaJWT();
  }

  logout(){
    this.tokenService.excluirToken();
    this.usuarioSubject.next({})
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

}

