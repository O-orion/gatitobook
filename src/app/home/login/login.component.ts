import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = ''
  senha= ''

  constructor(private auth: AutenticacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
   this.auth.autentica(this.usuario,this.senha).subscribe({
     next: (sucesso) => {
       alert("Logado com sucesso! JESUS CRISTO É O SENHOR")
       this.router.navigate(['animais'])
     },
     error: (err) => {
       alert("Usuário ou senha invalido!")
     }
   })
  }

}
