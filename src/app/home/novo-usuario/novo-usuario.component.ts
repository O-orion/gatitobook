import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  //injetano serviço para valiação de form
  constructor(private formBuilder: FormBuilder, private novoUser: NovoUsuarioService) { }

  ngOnInit(): void {
    //executao após er ejetado todos os services
    //indicado para cria os form
    this.novoUsuarioForm = this.formBuilder.group({
      //descrição dos elementos dos form
      email: [''],
      fullName:[''],
      userName: [''],
      password: ['']
    })
  }// fim onit

  cadastrar(){
    //getRawValue retorna um objeto com o estado das variaveis declrado acima no form
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario // casting dizendo que o que retorna e do tipo novouser
    console.log(novoUsuario)
  }

}
