import { Router } from '@angular/router';
import { UsuarioExisteService } from './usuario-existe.service';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { NovoUsuario } from './novo-usuario';
import { miniusculoValidator } from './minuscula.validators';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  //injetano serviço para valiação de form
  constructor(
    private formBuilder: FormBuilder,
    private novoUser: NovoUsuarioService,
    private usuarioExistente: UsuarioExisteService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    //executao após er ejetado todos os services
    //indicado para cria os form
    this.novoUsuarioForm = this.formBuilder.group({
      //descrição dos elementos dos form
      //required -> obrigatorio, email -> validação de email
      email: ['',[Validators.required, Validators.email]],
      fullName:['',[Validators.required, Validators.minLength(4)]],
      userName: ['', [ Validators.required,miniusculoValidator],[this.usuarioExistente.usuarioExistente()]],
      password: ['']
    },
    {// validação do form
      validators: [usuarioSenhaIguaisValidator]
    })
  }// fim onit

  cadastrar(){
    //getRawValue retorna um objeto com o estado das variaveis declrado acima no form

    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario // casting dizendo que o que retorna e do tipo novouser
      this.novoUser.cadastraNovoUsuario(novoUsuario).subscribe({
        next: (sucesso) => {
          this.router.navigate([''])
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
