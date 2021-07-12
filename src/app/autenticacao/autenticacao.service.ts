import { UsuarioService } from './usuario/usuario.service';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  //Angular faz a injenção do objeto automatico
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UsuarioService) { }

  //Observable é um objeto ele retorna um objeto do tipo que eu passar
  autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:3000/user/login',{
      userName: usuario,
      password: senha,
    },
    {
      observe: 'response'
    }).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? ''
        this.userService.salvarToken(authToken);
        
      })
    )

  }

}
