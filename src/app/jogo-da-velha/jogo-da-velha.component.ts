import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent {
  jogadorAtual: string = 'O';
  vencedor: string = '';
  tabuleiro: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  // prettier-ignore
  processarJogada(linha: number, coluna: number) {
    if(this.tabuleiro[linha][coluna] == '' && this.vencedor == ''){
      this.tabuleiro[linha][coluna] = this.jogadorAtual;
      
      // verificando se tem vencedor
      if(this.checaVencedor(this.jogadorAtual)) {
        this.vencedor = this.jogadorAtual;
      }

      // mudando de jogador
      if (this.jogadorAtual == 'O') {
        this.jogadorAtual = 'X';
      }
      else {
        this.jogadorAtual = 'O';
      }
    }
  }

  // prettier-ignore
  checaVencedor(jogador: string): boolean {
    for (let i = 0; i < this.tabuleiro.length; i++) {
      if (this.tabuleiro[i][0] == jogador && this.tabuleiro[i][1] == jogador && this.tabuleiro[i][2] == jogador) {
        return true;
      }
    }

    for (let i = 0; i < this.tabuleiro.length; i++) {
      if (this.tabuleiro[0][i] == jogador && this.tabuleiro[1][i] == jogador && this.tabuleiro[2][i] == jogador) {
        return true;
      }
      if (this.tabuleiro[0][0] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][2] == jogador) {
          return true;
      }
      if (this.tabuleiro[0][2] == jogador && this.tabuleiro[1][1] == jogador && this.tabuleiro[2][0] == jogador) {
        return true;
      }
    }
    return false;
  }

  reset() {
    this.jogadorAtual = 'O';
    this.vencedor = '';
    this.tabuleiro = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }
}
