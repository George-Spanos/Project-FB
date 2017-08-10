import {Injectable} from '@angular/core';
@Injectable()
export class Card {
  public canbeRevealed: boolean;
  public value: number;
  public revealed: boolean;
  public text: string;
  constructor( canbeRevealed: boolean, value: number, revealed: boolean, text: string) {
    this.canbeRevealed = canbeRevealed;
    this.value = value;
    this.revealed = revealed;
    this.text = text;
  }
}
