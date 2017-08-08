import {Injectable} from '@angular/core';
@Injectable()
export class Card {
  public value: number;
  public revealed: boolean;
  public text: string;
  constructor( value: number, revealed: boolean, text: string) {
    this.value = value;
    this.revealed = revealed;
    this.text = text;
  }
}
