import { Injectable } from '@angular/core';

const key = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  //MÉTODOS DE TOKEN
  
  retornaToken(){
    return localStorage.getItem(key) ?? ''
  }

  salvarToken(token:string){
    localStorage.setItem(key,token)
  }

  excluirToken(){
    localStorage.removeItem(key)
  }

  possuiToken(){
    // !! <-- retorna um boolan ou transforma as repostas em boolean
    return !!this.retornaToken();
  }

}
