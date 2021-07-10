import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  //Angular faz a injenção do objeto automatico
  constructor(private http: HttpClient) { }

  //Observable é um objeto ele retorna um objeto do tipo que eu passar
  autentica(usuario: string, senha: string): Observable<any>{
    return this.http.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha,
    })

  }

}
