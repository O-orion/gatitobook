import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';



@NgModule({
  declarations: [
    MensagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      MensagemComponent //exportando o component mensagemComponent
  ]
})
export class MensagemModule { }
