import { Injectable } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenhasService {

  constructor() {}

  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public prioridade: boolean = true;

  public inputNovaSenha : string = '';

  public guicheAtual : number = 0;

  senhasArray = new Map<string, string[]>([
    ['SG', []], 
    ['SE', []], 
    ['SP', []]
  ]);

  senhasChamadas: string[] = [];

  senhasGuiche = new Map<string, number>();

  getSenhaGuiche(senha: string) {
    return this.senhasGuiche.get(senha);
  }

  getSenhasChamadas() {
    return this.senhasChamadas;
  }

  chamarCliente() {
    let senha : any;
    
    const sps = this.senhasArray.get('SP');

    if(this.prioridade) {
      senha = sps?.shift();
    }

    if(!senha) {
      const ses = this.senhasArray.get('SE');
      const sgs = this.senhasArray.get('SG');
  
      senha = ses?.shift() ?? sgs?.shift();
    }

    if(!senha) {
      alert("A fila está vazia!");

      return;
    }

    if(this.senhasChamadas.length > 5) {
      this.senhasChamadas.shift();
    }

    this.senhasChamadas.push(senha);

    this.guicheAtual = (this.guicheAtual % 3) + 1;

    this.senhasGuiche.set(senha, this.guicheAtual);

    this.prioridade = !this.prioridade;
  }

  computaSoma(tipoSenha: string = '') {
    this.senhasTotal++;
    
    let soma = 0;

    if(tipoSenha === 'SG') {
      soma = this.senhasGeral++;
    }
    else if(tipoSenha === 'SP') {
      soma = this.senhasPrior++;
    }
    else if(tipoSenha === 'SE') {
      soma = this.senhasExame++;
    }

    return soma;
  }

  novaSenha(tipoSenha: string = '') {
    const someEspecifica = this.computaSoma(tipoSenha);

    const arrayEspecifico = this.senhasArray.get(tipoSenha);

    if(arrayEspecifico == null) {
      alert("Não foi possível gerar nova senha...");
      return;
    }

    this.inputNovaSenha =
      new Date().getFullYear().toString().substring(2, 4) +
      new Date().getMonth().toString().padStart(2, '0') +
      new Date().getDay().toString().padStart(2, '0') +
      '-' +
      tipoSenha + 
      ((someEspecifica ?? -1) + 1).toString().padStart(2, '0');

      arrayEspecifico.push(this.inputNovaSenha);

      console.log(this.senhasArray);
  }
}
